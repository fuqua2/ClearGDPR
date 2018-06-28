const Web3 = require('web3');
const QuorumContract = require('./../../src/utils/blockchain/quorum-contract');
const abi = require('../../src/utils/blockchain/contract-abi');
const web3ProviderFactory = require('../../src/utils/blockchain/web3-provider-factory');
const web3 = new Web3(web3ProviderFactory());

let quorum;

beforeAll(async () => {
  quorum = new QuorumContract(web3, abi);
  await quorum.deploy(
    '0x60806040523480156200001157600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001604051908082528060200260200182016040528015620000835781602001602082028038833980820191505090505b50600190805190602001906200009b9291906200011d565b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660016000815481101515620000cf57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550620001f2565b82805482825590600052602060002090810192821562000199579160200282015b82811115620001985782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550916020019190600101906200013e565b5b509050620001a89190620001ac565b5090565b620001ef91905b80821115620001eb57600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff021916905550600101620001b3565b5090565b90565b61155680620002026000396000f3006080604052600436106100da576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff168062091988146100df5780630c1e947f1461013a57806316df743b146101b05780634c3e9972146101f557806352843d51146102815780636017cf4c146102f457806362b8b3001461035d5780636cc4f130146103db578063785779d01461042457806391bd72231461046d578063a3514e4a146104e0578063ae0ef4b41461055e578063bd92ccee146105dc578063c24b846f14610625578063f77c4791146106ab575b600080fd5b3480156100eb57600080fd5b50610120600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610702565b604051808215151515815260200191505060405180910390f35b34801561014657600080fd5b506101966004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803560ff1690602001909291905050506107a5565b604051808215151515815260200191505060405180910390f35b3480156101bc57600080fd5b506101df600480360381019080803560001916906020019092919050505061082e565b6040518082815260200191505060405180910390f35b34801561020157600080fd5b50610267600480360381019080803560001916906020019092919080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610856565b604051808215151515815260200191505060405180910390f35b34801561028d57600080fd5b506102d06004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b56565b604051808260028111156102e057fe5b60ff16815260200191505060405180910390f35b34801561030057600080fd5b506103436004803603810190808035600019169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bc9565b604051808215151515815260200191505060405180910390f35b34801561036957600080fd5b506103c160048036038101908080359060200190820180359060200190808060200260200160405190810160405280939291908181526020018383602002808284378201915050505050509192919290505050610c5c565b604051808215151515815260200191505060405180910390f35b3480156103e757600080fd5b5061040a6004803603810190808035600019169060200190929190505050610d4e565b604051808215151515815260200191505060405180910390f35b34801561043057600080fd5b506104536004803603810190808035600019169060200190929190505050610e87565b604051808215151515815260200191505060405180910390f35b34801561047957600080fd5b50610482610fa3565b6040518080602001838152602001828103825284818151815260200191508051906020019060200280838360005b838110156104cb5780820151818401526020810190506104b0565b50505050905001935050505060405180910390f35b3480156104ec57600080fd5b506105446004803603810190808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919291929050505061103e565b604051808215151515815260200191505060405180910390f35b34801561056a57600080fd5b506105c26004803603810190808035906020019082018035906020019080806020026020016040519081016040528093929190818152602001838360200280828437820191505050505050919291929050505061119b565b604051808215151515815260200191505060405180910390f35b3480156105e857600080fd5b5061060b60048036038101908080356000191690602001909291905050506111ee565b604051808215151515815260200191505060405180910390f35b34801561063157600080fd5b506106546004803603810190808035600019169060200190929190505050611223565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b8381101561069757808201518184015260208101905061067c565b505050509050019250505060405180910390f35b3480156106b757600080fd5b506106c0611438565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b600080600090505b60018054905081101561079a578273ffffffffffffffffffffffffffffffffffffffff1660018281548110151561073d57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16141561078d576001915061079f565b808060010191505061070a565b600091505b50919050565b60008160026000866000191660001916815260200190815260200160002060020160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083600281111561081e57fe5b0217905550600190509392505050565b6000600260008360001916600019168152602001908152602001600020600101549050919050565b6000806000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156108b457600080fd5b836000151560026000836000191660001916815260200190815260200160002060000160009054906101000a900460ff1615151415156108f357600080fd5b6108fc8461119b565b151561090757600080fd5b600091505b6001805490508210156109dc576000600260008760001916600019168152602001908152602001600020600201600060018581548110151561094a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908360028111156109ca57fe5b0217905550818060010192505061090c565b600091505b8351821015610a8b57600160026000876000191660001916815260200190815260200160002060020160008685815181101515610a1a57fe5b9060200190602002015173ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690836002811115610a7957fe5b021790555081806001019250506109e1565b600060026000876000191660001916815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f17b46fe72172b70500853bedb3b5ba16a452a4734c92f74d2aed8a260c8e5392858560405180836000191660001916815260200180602001828103825283818151815260200191508051906020019060200280838360005b83811015610b36578082015181840152602081019050610b1b565b50505050905001935050505060405180910390a160019250505092915050565b600060026000846000191660001916815260200190815260200160002060020160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b6000610bd433610702565b1515610bdf57600080fd5b7f7adbefd4047a6b3fc04baed7453752b4eceb772d9036d0006014fc9cfa9af75683836040518083600019166000191681526020018273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019250505060405180910390a16001905092915050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610cb957600080fd5b610cc28261103e565b1515610ccd57600080fd5b7fa5ce10be54b4ef0d5b03c912f8855709209175079c70907491e4ab39606cc7b6826040518080602001828103825283818151815260200191508051906020019060200280838360005b83811015610d32578082015181840152602081019050610d17565b505050509050019250505060405180910390a160019050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610dab57600080fd5b816000151560026000836000191660001916815260200190815260200160002060000160009054906101000a900460ff161515141515610dea57600080fd5b600260008460001916600019168152602001908152602001600020600101600081548092919060010191905055507fd962378467089e92a2763b4d26aa48ad0ce946906eba293d118d06503e8b42ab83600260008660001916600019168152602001908152602001600020600101546040518083600019166000191681526020018281526020019250505060405180910390a16001915050919050565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610ee457600080fd5b816000151560026000836000191660001916815260200190815260200160002060000160009054906101000a900460ff161515141515610f2357600080fd5b600160026000856000191660001916815260200190815260200160002060000160006101000a81548160ff0219169083151502179055507f6035499ce5e80742180c62be06aea6c0cce9f0df624f498b9709a79adc8fb9968360405180826000191660001916815260200191505060405180910390a16001915050919050565b60606000600180805490508180548060200260200160405190810160405280929190818152602001828054801561102f57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311610fe5575b50505050509150915091509091565b60008060018351016040519080825280602002602001820160405280156110745781602001602082028038833980820191505090505b506001908051906020019061108a92919061145d565b506000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600160008154811015156110bd57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550600090505b825181101561119157828181518110151561112157fe5b90602001906020020151600180830181548110151561113c57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550808060010191505061110a565b6001915050919050565b600080600090505b82518110156111e4576111cc83828151811015156111bd57fe5b90602001906020020151610702565b15156111d757600080fd5b80806001019150506111a3565b6001915050919050565b600060026000836000191660001916815260200190815260200160002060000160009054906101000a900460ff169050919050565b60608060008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614151561128357600080fd5b836000151560026000836000191660001916815260200190815260200160002060000160009054906101000a900460ff1615151415156112c257600080fd5b6001805490506040519080825280602002602001820160405280156112f65781602001602082028038833980820191505090505b509250600091505b6001805490508210156113ee57600260008660001916600019168152602001908152602001600020600201600060018481548110151561133a57fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1683838151811015156113bb57fe5b9060200190602002019060028111156113d057fe5b908160028111156113dd57fe5b8152505081806001019250506112fe565b7f5cee2268933cd873c783419e5be7668e121517767fe669a5a703b09426b138158560405180826000191660001916815260200191505060405180910390a1829350505050919050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b8280548282559060005260206000209081019282156114d6579160200282015b828111156114d55782518260006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055509160200191906001019061147d565b5b5090506114e391906114e7565b5090565b61152791905b8082111561152357600081816101000a81549073ffffffffffffffffffffffffffffffffffffffff0219169055506001016114ed565b5090565b905600a165627a7a723058202f64757297e3b6500387f2ff2c16612748aeb0447e8cb1cc7aa6d6499c1c3c8f0029'
  );
});

describe('Web3 monkey patch', () => {
  it('should allow the events to fire without crashing', async done => {
    const subjectId = web3.utils.sha3('12929292992');
    expect.assertions(2);

    quorum.contract.events.allEvents([], (err, data) => {
      expect(err).toBeNull();
      expect(data.returnValues.subjectId).toEqual(subjectId);
      done();
    });

    await quorum.performMethod('recordConsentGivenTo', [subjectId, []]);
  });
});
