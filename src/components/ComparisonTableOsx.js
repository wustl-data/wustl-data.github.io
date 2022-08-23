import React from 'react';
import Table from 'react-bootstrap/Table';

function ComparisonTableOsx() {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Dev Container<br />(1-Click)</th>
                    <th>Manual Setup</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Development OS</td>
                    <td>Ubuntu</td>
                </tr>
                <tr>
                    <td>IDE</td>
                    <td>VS Code</td>
                    <td>Any</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td colSpan={2}>Larry the Bird</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ComparisonTableOsx;