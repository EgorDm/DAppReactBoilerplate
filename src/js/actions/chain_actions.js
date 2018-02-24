import * as ChainActionTypes from "../constants/chain_action_types";

export function getAccounts() {
    return {
        type: ChainActionTypes.GET_ACCOUNTS,
        payload: web3.eth.getAccounts()
    };
}