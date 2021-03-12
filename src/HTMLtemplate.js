const generateCards = teamData => {
 
    const manager = teamData.manager.map(function(position) {
        let managerHTML = `
        <div class="col-md-6 col-lg-4">
            <div class="card" float:"Center">
                <div class="card-header bg-dark text-white" style="padding:1.25rem 1.25rem;">
                    <img src="assets/images/${position.photoName}" alt="Profile photo" style="height:308px; width:auto"><br><br>
                    <h2>${position.name}</h2>
                    <h3>Manager</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${position.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${position.email}">${position.email}</a></li>
                    <li class="list-group-item">Office Number: <a href="tel:${position.officeNumber}">${position.officeNumber}</a></li>
                </ul>
            </div>
        </div>
        `
        return managerHTML
    });

    const engineer = teamData.engineer.map(function(position) {
        let engineerHTML = `
        <div class="col-md-6 col-lg-4">
            <div class="card">
                <div class="card-header bg-dark text-white" style="padding:1.25rem 1.25rem;">
                    <img src="assets/images/${position.photoName}" alt="Profile photo" style="height:308px; width:auto"><br><br>
                    <h2>${position.name}</h2>
                    <h3>Engineer</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${position.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${position.email}">${position.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${position.github}">${position.github}</a></li>
                </ul>   
            </div>
        </div>
        `
        return engineerHTML
    });

    const intern = teamData.intern.map(function(position) {
        let internHTML = `
        <div class="col-md-6 col-lg-4">
            <div class="card">
                <div class="card-header bg-dark text-white" style="padding:1.25rem 1.25rem;">
                    <img src="assets/images/${position.photoName}" alt="Profile photo" style="height:308px; width:auto"><br><br>
                    <h2>${position.name}</h2>
                    <h3>Intern</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${position.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${position.email}">${position.email}</a></li>
                    <li class="list-group-item">School: ${position.school}</li>
                </ul>   
            </div>
        </div>
        `
        return internHTML
    });
    return [manager,engineer,intern].join("")
    }


module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>My Team</title>
        </head>
        <body style="background-color: rgb(169, 169, 180);">
            <div class="jumbotron bg-dark text-white text-center">
                <h1>My Team</h1>
            </div>
            <div class="container">
                <div class="row">
                    ${generateCards(templateData)}
                </div>
            </div>
        </body>
        </html>    
        `
}

