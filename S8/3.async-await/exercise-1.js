//Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

const runTimeOut = async () => {
    const promise = await((resolve) => {
        setTimeout(function () {
            resolve();
        }, 2000);                                        
    })
    await promise(() => {console.log('Time out!')})
};

runTimeOut();

