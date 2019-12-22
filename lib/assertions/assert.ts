export class Assert{
    public static equal(expected: any, found: any, message = "Elements did not match"){
        if(expected !== found) throw Error(message);
    }

    public static notEqual(expected: any, found: any, message = "Elements are same"){
        if(expected === found) throw Error(message)
    }

    public static true(value: boolean, message = "Evaluation yielded false"){
        if(!value)  throw Error(message);
    }

    public static false(value: boolean, message = "Evaluation yielded true"){
        if(value)  throw Error(message);
    }

    public static assertContains(){
        
    }
}