import {loadContract} from "../helpers/chain";
import GreeterArtifact from '../../../build/contracts/Greeter.json';

export function getInstance() {
    return loadContract(GreeterArtifact);
}

export function greet() {
    return new Promise((resolve, reject) => {
        getInstance()
            .then(instance => instance.greet())
            .then(greeting => {
                resolve(greeting)
            })
    });
}