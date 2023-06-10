import React, { useEffect, useState } from 'react';
import FreelancerModel from '../models/FreelancerModel';

const FreelancerController = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('../../freelas.json');
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Erro ao buscar dados:', error);
    }
  };

  // Função para processar os dados e retornar a estrutura necessária para a View
  const processData = () => {
    // Processar os dados conforme necessário para a exibição na View
    // Por exemplo, filtrar, ordenar ou transformar os dados

    // Retorna a estrutura de dados necessária para a View
    return data.map((item: FreelancerModel) => ({
      id: item.id,
      name: item.name,
      biography: item.biography,
      photo: item.photo,
      recentWork: item.recentWork,
      technologies: item.technologies,
      contacts: item.contacts,
    }));
  };

  // Chama a função para processar os dados
  const processedData = processData();

  // Aqui, você pode realizar outras lógicas de negócios conforme necessário

  // Não retorna diretamente a View, mas fornece os dados processados para a View renderizar
  return processedData;
};

export default FreelancerController;