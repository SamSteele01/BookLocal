const AFAbi = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_email",
        "type": "string"
      },
      {
        "name": "_gitHubUrl",
        "type": "string"
      },
      {
        "name": "_linkedInUrl",
        "type": "string"
      },
      {
        "name": "_interest",
        "type": "string"
      }
    ],
    "name": "apply",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "getTotalApplications",
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
    "constant": false,
    "inputs": [
      {
        "name": "_newOrganizer",
        "type": "address"
      }
    ],
    "name": "addOrganzier",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "_n",
        "type": "uint256"
      }
    ],
    "name": "getApplicant",
    "outputs": [
      {
        "name": "_firstName",
        "type": "string"
      },
      {
        "name": "_lastName",
        "type": "string"
      },
      {
        "name": "_email",
        "type": "string"
      },
      {
        "name": "_gitHubUrl",
        "type": "string"
      },
      {
        "name": "_linkedInUrl",
        "type": "string"
      },
      {
        "name": "_interest",
        "type": "string"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "_applicant",
        "type": "address"
      }
    ],
    "name": "Apply",
    "type": "event"
  }
]

module.exports = AFAbi;
