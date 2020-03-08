import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const listProficiencia = (data, tipo) => {
    return data.map((element, index) => {
        return (<Row><Col>{tipo}: {element}</Col></Row>)
    });
}

const fichaProficiencias = (props) => {
    return (
        <Col>
            <Row>
                <Col>
                    {listProficiencia(props.data.lstProficiencias.ferramentas, 'Ferramenta')}
                    {listProficiencia(props.data.lstProficiencias.idiomas, 'Idioma')}
                    {listProficiencia(props.data.lstProficiencias.armas, 'Arma')}
                </Col>
            </Row>
            <Row>
                <Col><div className="AtributoNome">OUTRAS PROFICIÊNCIAS & IDIOMAS</div></Col>
            </Row>
        </Col>
    )
}

export default fichaProficiencias;