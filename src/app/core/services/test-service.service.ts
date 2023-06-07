import { Injectable } from "@angular/core";

@Injectable()
export class TestService {
    public counter = 0;


    public sumTwo() {
        return this.counter += 2;
    }

    public subtractTwo() {
        return this.counter -= 2
    }
    

}