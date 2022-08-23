import React from 'react';
import Table from 'react-bootstrap/Table';

function ComparisonTableWindows() {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th></th>
                    <th>Dev Container<br />(1-Click)</th>
                    <th>Manual Setup - Pure Windows</th>
                    <th>Manual Setup - WSL</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Development OS</td>
                    <td>Ubuntu</td>
                    <td>Windows or WSL</td>
                    <td>Ubuntu</td>
                </tr>
                <tr>
                    <td>IDE</td>
                    <td>VS Code</td>
                    <td>Any</td>
                    <td>VS Code or PyCharm</td>
                </tr>
                <tr>
                    <td>Python</td>
                    <td>Preinstalled</td>
                    <td>Need to configure</td>
                    <td>Need to configure</td>
                </tr>
                <tr>
                    <td>Default Shell</td>
                    <td>Zsh</td>
                    <td>Powershell</td>
                    <td>Bash</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ComparisonTableWindows;