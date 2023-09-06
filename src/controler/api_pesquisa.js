export default {
    enviar: async (digito) => {
        
        let letra = {
            digito: digito,
        };
        
        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(letra),
        };

        const response = await fetch('http://192.168.255.56/palabraria/sugestao.php', requisição);

        

        const data = await response.json();
        return data;
    },
};

