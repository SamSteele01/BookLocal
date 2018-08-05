/* eslint-disable */
const hotelABI = [
  {
    "inputs": [
      {
        "name": "_owners",
        "type": "address[]"
      },
      {
        "name": "_wallet",
        "type": "address"
      },
      {
        "name": "_bookLocal",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "payable": true,
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "reservation",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "roomTypeAddr",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "checkIn",
        "type": "uint256"
      },
      {
        "indexed": false,
        "name": "checkOut",
        "type": "uint256"
      }
    ],
    "name": "Reserve",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "roomType",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newPrice",
        "type": "uint256"
      }
    ],
    "name": "ChangeRoomPrice",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": true,
        "name": "reservation",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "newPrice",
        "type": "uint256"
      }
    ],
    "name": "ChangeReservationPrice",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_price",
        "type": "uint256"
      },
      {
        "name": "_sleeps",
        "type": "uint256"
      },
      {
        "name": "_beds",
        "type": "uint256"
      },
      {
        "name": "_inventory",
        "type": "uint256"
      }
    ],
    "name": "addRoomType",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_admins",
        "type": "address[]"
      }
    ],
    "name": "addAdmins",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_owners",
        "type": "address[]"
      }
    ],
    "name": "addOwners",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_admins",
        "type": "address[]"
      }
    ],
    "name": "removeAdmins",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_owners",
        "type": "address[]"
      }
    ],
    "name": "removeOwners",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_reservationAddr",
        "type": "address"
      },
      {
        "name": "_newPrice",
        "type": "uint256"
      }
    ],
    "name": "changeReservationPrice",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_roomTypeAddr",
        "type": "address"
      },
      {
        "name": "_newPrice",
        "type": "uint256"
      }
    ],
    "name": "changeRoomTypePrice",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getAdmins",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getOwners",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_roomType",
        "type": "uint256"
      },
      {
        "name": "_checkIn",
        "type": "uint256"
      },
      {
        "name": "_checkOut",
        "type": "uint256"
      }
    ],
    "name": "reserve",
    "outputs": [],
    "payable": true,
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_reservationAddr",
        "type": "address"
      },
      {
        "name": "_potentialGuest",
        "type": "address"
      }
    ],
    "name": "access",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_reservationAddr",
        "type": "address"
      }
    ],
    "name": "settle",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_reservationAddr",
        "type": "address"
      }
    ],
    "name": "cancel",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_day",
        "type": "uint256"
      }
    ],
    "name": "getReservationByCheckInDay",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_guest",
        "type": "address"
      }
    ],
    "name": "getReservationByGuestAddr",
    "outputs": [
      {
        "name": "",
        "type": "address[]"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_roomTypeAddr",
        "type": "address"
      }
    ],
    "name": "getRoomInfo",
    "outputs": [
      {
        "name": "_sleeps",
        "type": "uint256"
      },
      {
        "name": "_beds",
        "type": "uint256"
      },
      {
        "name": "_price",
        "type": "uint256"
      },
      {
        "name": "_minRentTime",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getWallet",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getNumOfRoomTypes",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_type",
        "type": "uint256"
      }
    ],
    "name": "getRoomTypeAddress",
    "outputs": [
      {
        "name": "",
        "type": "address"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_roomType",
        "type": "uint256"
      },
      {
        "name": "_day",
        "type": "uint256"
      }
    ],
    "name": "getAvailability",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTotalRooms",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_roomType",
        "type": "uint256"
      },
      {
        "name": "_checkIn",
        "type": "uint256"
      },
      {
        "name": "_checkOut",
        "type": "uint256"
      }
    ],
    "name": "hasAvailability",
    "outputs": [
      {
        "name": "",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_roomType",
        "type": "uint256"
      }
    ],
    "name": "getCurrentAdjustedTime",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_roomType",
        "type": "uint256"
      },
      {
        "name": "_checkIn",
        "type": "uint256"
      },
      {
        "name": "_checkOut",
        "type": "uint256"
      }
    ],
    "name": "getReservationPrice",
    "outputs": [
      {
        "name": "_price",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
]
;

module.exports = hotelABI
