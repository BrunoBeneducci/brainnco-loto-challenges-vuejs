import axios from 'axios';
import { loterias, loteriasConcursos, concursos } from './mockData';

const api = axios.create({
    baseURL: 'https://brainn-api-loterias.herokuapp.com/api/v1',
    timeout: 5000, // timeout de 5 segundos
});

// Interceptor para fallback com dados mockados quando a API falhar
api.interceptors.response.use(
    (response) => response,
    (error) => {
        const { config } = error;
        const url = config?.url || '';

        console.warn(`⚠️ API indisponível (${url}), usando dados mockados...`);

        // Simula resposta bem sucedida com dados mockados
        if (url === '/loterias') {
            return Promise.resolve({
                status: 200,
                data: loterias
            });
        }

        if (url === '/loterias-concursos') {
            return Promise.resolve({
                status: 200,
                data: loteriasConcursos
            });
        }

        // Para /concursos/{id}
        const concursoMatch = url.match(/\/concursos\/(\d+)/);
        if (concursoMatch) {
            const concursoId = concursoMatch[1];
            const concursoData = concursos[concursoId];
            
            if (concursoData) {
                return Promise.resolve({
                    status: 200,
                    data: concursoData
                });
            }
        }

        // Se não houver mock disponível, rejeita o erro
        return Promise.reject(error);
    }
);

export default api;
