const1 = '<textarea id="mensagem" name="mensagem" rows="5" cols="40" placeholder="Digite seu texto aqui..."></textarea><button onClick={handleSendPrompt} disabled={isLoading} style="padding:10px 20px; cursor: pointer;">{isLoading ? "Pensando..." : "Enviar Prompt"}</button>';

module.exports = {const1};
