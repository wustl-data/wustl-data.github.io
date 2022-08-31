import React from 'react';
import Table from 'react-bootstrap/Table';

function ComparisonTableOsx() {
    return (
        <Table striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>Feature</th>
                    <th>affects:</th>
                    <th>Dev Container<br />(1-Click)</th>
                    <th>Manual Setup</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><b>Development OS</b></td>
                    <td>OS GUI, filesystem</td>
                    <td>Ubuntu</td>
                    <td>OSX</td>
                </tr>
                <tr>
                    <td><b>IDE</b></td>
                    <td>GUI-based versions of tools e.g. git and customizable IDE settings</td>
                    <td>VS Code</td>
                    <td>Any</td>
                </tr>
                <tr>
                    <td><b>Python</b></td>
                    <td>Right version installed?</td>
                    <td>Preinstalled</td>
                    <td>Need to configure</td>
                </tr>
                <tr>
                    <td><b>Default Shell</b></td>
                    <td>Shell syntax often found in online tutorials/compatibility with some software packages</td>
                    <td>Zsh (Unix)</td>
                    <td>Bash pre-Catalina, Zsh post-Catalina (both Unix)</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default ComparisonTableOsx;