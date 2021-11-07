// Importando o React
import React from "react";
// Importando os components necessários da lib react-materialize
import { Row, Col, Card } from 'react-materialize';
// Importando o component Experience
import Experience from '../experience/experience'
// Importando o avatar da empresa 1
import company_avatar from '../../images/company.png';
// Importando o avatar da empresa 1
import company_avatar2 from '../../images/company2.png';

const Home = () => (
  <Row>
    <Col m={12} s={10}>
      <h5 className="subtitle">Sobre o curso</h5>
      <Card>
        <div>
          <p><b>Objetivos</b></p>
          <p>Nosso curso é focado em aprimorar os conhecimentos dos nossos alunos com o auxílio de diversos 
            professores capacitados e formados na área. A principal ferramenta que será utilizada ao longo do
            curso serão os Flashcards, ajudando a fixar o conteúdo de forma mais dinâmica.</p>
          <br/>
          <p><b>Modalidades</b></p>
          <p>Os alunos podem escolher entre as modalidades presencial, Online (Ead) ou híbrida, proporcionando
            aos alunos a escolha do modo de ensino que preferirem.
          </p>
        </div>
      </Card>
      <h5 className="subtitle">Qualificações</h5>

        {/* Passando os parâmetros title, company, description e avatar para o component Experience */}
        <Experience title="Nota do MEC"
          description="A qualidade dos nossos cursos é comprovada através de nossa nota no MEC, 
            tendo nota 4, servindo como medida para futuros alunos que venham a aderir nossos cursos"
          avatar={company_avatar}
        />
        <Experience title="Plataforma online"
          description="Possuimos uma plataforma online feita para atender todas as necessidades dos alunos,
            permitindo um aprendizado mais dinâmico e com interação direta com os professores"
          avatar={company_avatar2}                    
        /> 
    </Col>
  </Row>
);

export default Home;