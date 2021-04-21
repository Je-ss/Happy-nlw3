const Database = require('./db');

Database.then(async db => {

    // inserir dados na tabela 
   await db.run(`
    insert into orphanages (
            lat text,
            lng text,
            name text, 
            about text,
            whatsapp text,
            images text,  
            instructions text,
            opening_hours text,
            open_on_weekends text

        ) values (
            "-27.222633,
            "-49.6555874",
            "Lar dos meninos",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade socia ",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ5ZJId5b2ojbHsHDO5jTjHzsJxJFMd9Rx_kQ&usqp=CAU",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar",
            "Horrio de visita das 8H até 18h",
            "0"

        )
    
    
    
    `)
   




})


