export default {
    enviar: async () => {
        let requisição = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        };

        const response = await fetch('http://192.168.255.131/palabraria/comida.php', requisição);

        const data = await response.json();
        return data;
    },
};