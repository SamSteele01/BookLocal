pragma solidity ^0.4.17;

import './PermissionedAccess.sol';

// Room base defines room attributes, stores the rooms, and adds new rooms
contract RoomBase is PermissionedAccess {

    /**
    Define variables
    */

    // @dev main Room strucutre
    struct Room {

        // owner
        address owner;

        // renter
        address renter;

        // min rental (unit of time, i.e. one day = 3600*24 seconds)
        uint256 minRentTime;

        // identify room Number
        uint256 roomNumber;

        // identify number of beds
        uint16 numBeds;
    }

    // @dev init array of Room structs, called rooms
    Room[] public rooms;

    struct Reservation {
        address guest;
        uint256 tokenId;
        uint256 start;
        uint256 stop;
    }

    // @dev default minimum unit of rent is one day (in seconds)
    uint256 public MIN_RENT_TIME = 3600*24;

    // @dev mapping for "tokenId" assignment to owner
    mapping (uint256 => address) public roomOwners_byIndex;

    // @dev mapping to store total rooms owned
    mapping (address => uint256) public numRooms_byOwner;

    // @dev mapping for ERC721 approval to transfer
    mapping (uint256 => address) public transferApproval_byIndex;

    // @dev mapping for basic reservations
    mapping (uint256 => mapping (uint256 => address)) public reservations;

    // @dev mppings for guest search
    mapping (address => Reservation) public reservationByGuest;

    /**
    Define Functions
    */

    function addRooms(uint16[] _numBeds, uint256[] _roomNumber) public onlyCLevel {

        require(_numBeds.length == _roomNumber.length);

        address _owner = msg.sender;
        address _renter = address(0);
        uint256 _min = MIN_RENT_TIME;

        for (uint i=0; i<_roomNumber.length; i++) {
            // create new Room struct and store to memory
            Room memory _room = Room({
                owner: _owner,
                renter: _renter,
                minRentTime: _min,
                numBeds: _numBeds[i],
                roomNumber: _roomNumber[i]
            });

            // push new room to rooms array
            uint256 roomId = rooms.push(_room) - 1;

            _transfer(0, _owner, roomId);
        }
    }

    function addRoom(uint16 _numBeds, uint256 _roomNumber) public onlyCLevel {

        address _owner = msg.sender;
        address _renter = address(0);
        uint256 _min = MIN_RENT_TIME;

        // create new Room struct and store to memory
        Room memory _room = Room({
            owner: _owner,
            renter: _renter,
            minRentTime: _min,
            numBeds: _numBeds,
            roomNumber: _roomNumber
        });

        // push new room to rooms array
        uint256 roomId = rooms.push(_room) - 1;

        _transfer(0, _owner, roomId);
    }

    function getNumBeds(uint256 _tokenId) external view returns (uint16 numBeds) {
        Room storage room = rooms[_tokenId];

        numBeds = room.numBeds;
    }

    function getRoomInfo(uint256 _tokenId)
        external
        view
        returns (address owner, address renter, uint256 minRentTime, uint256 roomNumber, uint16 numBeds)
        {
        Room storage room = rooms[_tokenId];

        owner = room.owner;
        renter = room.renter;
        minRentTime = room.minRentTime;
        roomNumber = room.roomNumber;
        numBeds = room.numBeds;
    }

    function getNextReservation(address _guest) external view returns (
        uint256 _tokenId,
        uint256 _start,
        uint256 _stop
        ){
        Reservation storage _res = reservationByGuest[_guest];
        _tokenId = _res.tokenId;
        _start = _res.start;
        _stop = _res.stop;
    }

    function getReservations(uint256 _tokenId, uint256 _start, uint256 _stop) external view returns (address[] _renters) {

        require(_start < _stop);
        uint256 _timeSlots = _stop - _start;

        _renters = new address[](_timeSlots);

        uint256 _counter = 0;

        for (uint256 i=_start; i<_stop; i++) {
            address _renter = reservations[_tokenId][i];

            _renters[_counter] = _renter;
            _counter ++;
        }

        return _renters;
    }

    function changeMinRental(uint256 _tokenId, uint256 _newMin) external {
        Room storage room = rooms[_tokenId];
        require(msg.sender == room.owner);
        room.minRentTime = _newMin;
    }

    function changeNumBeds(uint256 _tokenId, uint16 _beds) external {
        Room storage room = rooms[_tokenId];
        require(msg.sender == room.owner);
        room.numBeds = _beds;
    }

    function changeRoomNum(uint256 _tokenId, uint8 _roomNumber) external {
        Room storage room = rooms[_tokenId];
        require(msg.sender == room.owner);
        room.roomNumber = _roomNumber;
    }

    // get time in order to make reservation
    // this is the minimum number of seconds that someone can rent
    //
    // so if minRentTime = 1 day = 3600*24 s, then the current adjusted time is
    //       time = now/minRentTime
    function getCurrentTime(uint256 _tokenId) external view returns (uint256 _time) {
        Room storage room = rooms[_tokenId];
        uint256 minRent = room.minRentTime;
        _time = now/minRent;
    }

    // @dev internally transfer token to new owner
    function _transfer(address _from, address _to, uint256 _tokenId) internal {

        numRooms_byOwner[_to] ++;
        roomOwners_byIndex[_tokenId] = _to;

        Room storage r = rooms[_tokenId];
        r.owner = _to;

        if (_from != address(0)) {
            numRooms_byOwner[_from]--;
        }
    }
}
