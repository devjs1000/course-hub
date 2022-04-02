function TimeOut({sec}){
    setTimeout(() => console.log('Initial timeout!',sec), sec);
    return (<></>);
}

export default TimeOut;