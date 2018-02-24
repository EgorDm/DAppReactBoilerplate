import Web3 from "web3";
import contract from 'truffle-contract';

export function initProvider() {
    if (typeof web3 !== 'undefined') window.web3 = new Web3(web3.currentProvider);
    else if(process.env.NODE_ENV !== 'production') {
        console.warn('No web3 detected. Using dev fallback');
        window.web3 = new Web3(new Web3.providers.HttpProvider(process.env.LOCAL_WEB3_PROVIDER));
    }
}

export function getAccount() {
    return new Promise((resolve, reject) => {
        web3.eth.getAccounts().then(result => {
            if(result) resolve(result[0]);
        })
    });
}

export function loadContract(artifact) {
    return new Promise((resolve, reject) => {
        const ret = contract(artifact);
        ret.setProvider(web3.currentProvider);
        fixTruffleContractCompatibilityIssue(ret).deployed().then((instance) => {
            resolve(instance);
        });
    });
}

function fixTruffleContractCompatibilityIssue(contract) {
    if (typeof contract.currentProvider.sendAsync !== "function") {
        contract.currentProvider.sendAsync = function() {
            return contract.currentProvider.send.apply(
                contract.currentProvider, arguments
            );
        };
    }
    return contract;
}
