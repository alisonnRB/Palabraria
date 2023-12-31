export default {
    enviar: async (palavraEN, palavraPT, categoria, descricao, imagens) => {
        const formData = new FormData();

        formData.append('palavraEN', palavraEN);
        formData.append('palavraPT', palavraPT);
        formData.append('categoria', categoria);
        formData.append('descricao', descricao);

        for (let i = 0; i <= 6; i++) {
            if (imagens[i]) {
                formData.append(`image${i}`, imagens[i]);
            }
        }


        // Faz a requisição
        const response = await fetch('http://192.168.255.56/palabraria/cadastra.php', {
            method: 'POST',
            body: formData,
        });

        // Espera a resposta do servidor e armazena para retornar ao cliente
        const data = await response.json();
        return data;
    },
};