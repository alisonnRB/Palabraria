export default {
    enviar: async (palavra) => {
        
        let letra = {
            palavra: palavra,
        };
        
        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(letra),
        };

        const response = await fetch('http://192.168.255.56/palabraria/deletaP.php', requisição);

        

        const data = await response.json();
        console.log(data.a);
        return data;
    },
};

