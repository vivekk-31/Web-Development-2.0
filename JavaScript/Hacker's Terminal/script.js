function terminal() {

    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand)
    let html = `<p>Initialising Hacking...</p>
            <p>Reading your files</p>
            <p>Password files detected</p>
            <p>Sending all passwords and personal files to server</p>
            <p>Cleaning up</p>`

    document.querySelector(".container").innerHTML = html;
}

terminal()