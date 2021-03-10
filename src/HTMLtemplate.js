const generateCards = teamData => {
 
    const manager = teamData.manager.map(function(position) {
        let managerHTML = `
        <div class="col-md-6 col-lg-4">
            <div class="card">
                <div class="card-header">
                    <img src="assets/images/${position.photoName}" alt="Profile photo" style="width:100%">
                    <h2>${position.name}</h2>
                    <h3><i class="fas fa-bullhorn"></i> Manager</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${position.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${position.email}">${position.email}</a></li>
                    <li class="list-group-item">Office Number: <a href="tel:${position.officePhone}">${position.officePhone}</a></li>
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
                <div class="card-header">
                    <img src="assets/images/${position.photoName}" alt="Profile photo" style="width:100%">
                    <h2>${position.name}</h2>
                    <h3><i class="fas fa-tools"></i> Engineer</h3>
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
                <div class="card-header">
                    <img src="assets/images/${position.photoName}" alt="Profile photo" style="width:100%">
                    <h2>${position.name}</h2>
                    <h3><i class="fas fa-garduation-cap"></i>Intern</h3>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${position.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${position.email}">${position.email}</a></li>
                    <li class="list-group-item">School: ${position.school}>${position.school}</a></li>
                </ul>   
            </div>
        </div>
        `
        return internHTML
    });
    return [manager,engineer,intern]
    }
    

module.exports = templateData => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
            <title>Team Muppets</title>
        </head>
        <body>
            <div class="jumbotron text-center">
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

