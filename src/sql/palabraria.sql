-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29/08/2023 às 18:41
-- Versão do servidor: 10.4.28-MariaDB
-- Versão do PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `palabraria`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `categoria`
--

CREATE TABLE `categoria` (
  `id` int(11) NOT NULL,
  `nome` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `categoria`
--

INSERT INTO `categoria` (`id`, `nome`) VALUES
(1, 'Comida'),
(2, 'Bebida');

-- --------------------------------------------------------

--
-- Estrutura para tabela `palavras`
--

CREATE TABLE `palavras` (
  `id` int(11) NOT NULL,
  `palavraEN` varchar(100) NOT NULL,
  `palavraPT` varchar(100) NOT NULL,
  `categoria` varchar(45) NOT NULL,
  `imagens` varchar(200) NOT NULL,
  `descricao` varchar(2000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `palavras`
--

INSERT INTO `palavras` (`id`, `palavraEN`, `palavraPT`, `categoria`, `imagens`, `descricao`) VALUES
(50, 'SANDÍA', 'melancia', '1', '[\"11693276244.jpg\"]', 'Melancia é uma planta da família Cucurbitaceae e também o nome do seu fruto. Trata-se de uma trepadeira rastejante originária da África.'),
(51, 'PAN', 'pão', '1', '[\"11693276388.jpg\"]', 'Pão é um alimento obtido pelo cozimento de uma massa alimentar de consistência elástica, elaborada basicamente com farinha de cereal, água, sal/açúcar. A evidência de ocorrência mais antiga de pão é na Europa datado em 30 mil anos a.C'),
(52, 'FRESA', 'morango', '1', '[\"11693276577.jpg\"]', 'Morango é considerado, na linguagem vulgar, como o fruto vermelho do morangueiro, da família das rosáceas. No entanto, em termos científicos não se pode considerar um fruto já que é constituído pelo receptáculo da flor original, em volta do qual se dispõem os frutos. '),
(53, 'MELÓN', 'melão', '1', '[\"11693276650.jpg\"]', 'Melão é uma fruta provavelmente nativa do Oriente Médio. Existem inúmeras variedades cultivadas em regiões semiáridas de todo o mundo, todas apresentando frutos mais ou menos esféricos, com casca espessa e polpa carnosa e suculenta, com muitas sementes achatadas no centro. '),
(54, 'PASTEL', 'bolo', '1', '[\"11693276761.jpg\"]', 'Bolo é um alimento à base de farinha, geralmente doce e cozido no forno. Os bolos são um dos componentes principais das festas, como as de aniversário e casamento, por vezes ornamentados artisticamente e ocupando o lugar central da mesa.'),
(55, 'DURAZNO', 'pêssego', '1', '[\"11693276843.jpg\"]', 'O pessegueiro é uma árvore decídua, nativa da China e sul da Ásia, de folhas alternas e serreadas, flores roxas e drupas pubescentes, comestíveis e com propriedades aperitivas e digestivas. Possui inúmeras variedades hortícolas.'),
(56, 'PIMIENTA', 'pimenta', '1', '[\"11693276952.jpg\"]', 'Pimenta é o nome comum dado a várias plantas, seus frutos e condimentos deles obtidos, de sabor geralmente picante. Porém, este termo tem acepções diferentes nos vários países lusófonos. No Brasil, o termo refere-se tanto às espécies de Capsicum como as de Piper.'),
(57, 'PALTA', 'abacate', '1', '[\"11693277326.jpg\"]', 'O abacate é o fruto comestível do abacateiro, uma árvore da família da Lauraceae nativa do México e da América do Sul, hoje extensamente cultivada em regiões tropicais e subtropicais, inclusive nas Ilhas Canárias, na Ilha da Madeira e na Sicília.'),
(58, 'hahahah', 'asas', '1', '[\"11693325884.jpg\"]', 'asasasasasassasassasasa');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `palavras`
--
ALTER TABLE `palavras`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de tabela `palavras`
--
ALTER TABLE `palavras`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=59;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
