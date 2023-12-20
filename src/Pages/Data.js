import React, { useState } from 'react';

function Data() {
    const initialData = [
        { id: 1, firstName: 'Aza', lastName: 'Kazmukhanov', username: '@31032' },
        { id: 2, firstName: 'Nurs', lastName: 'Konkanov', username: '@31031' },
        { id: 3, firstName: 'Beka', lastName: 'Torekhan', username: '@31037' },
        { id: 4, firstName: 'Meirambek', lastName: 'Koibakhar', username: '@31040' },
    ];

    const [tableData, setTableData] = useState(initialData);
    const [editingRow, setEditingRow] = useState(null);
    const [newValues, setNewValues] = useState({});
    const [searchTerm, setSearchTerm] = useState('');

    const addRow = () => {
        const newRow = {
            id: tableData.length + 1,
            firstName: 'New',
            lastName: 'User',
            username: '@new_user',
        };
        setTableData([...tableData, newRow]);
    };

    const editRow = (id) => {
        setEditingRow(id);
        const editingRow = tableData.find((item) => item.id === id);
        setNewValues({ ...editingRow });
    };

    const saveChanges = () => {
        const updatedData = tableData.map((item) =>
            item.id === editingRow ? { ...item, ...newValues } : item
        );
        setTableData(updatedData);
        setEditingRow(null);
        setNewValues({});
    };

    const deleteRow = (id) => {
        const updatedData = tableData.filter((item) => item.id !== id);
        setTableData(updatedData);
    };

    const cancelEdit = () => {
        setEditingRow(null);
        setNewValues({});
    };

    const handleSearch = () => {
        const filteredData = initialData.filter(
            (item) =>
                item.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.username.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setTableData(filteredData);
    };

    const clearFilter = () => {
        setSearchTerm('');
        setTableData(initialData);
    };

    return (
        <div className="container text-center mt-5">
            <h2>Bootstrap & JavaScript Example</h2>

            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{editingRow === item.id ? <input value={newValues.firstName} onChange={(e) => setNewValues({ ...newValues, firstName: e.target.value })} /> : item.firstName}</td>
                            <td>{editingRow === item.id ? <input value={newValues.lastName} onChange={(e) => setNewValues({ ...newValues, lastName: e.target.value })} /> : item.lastName}</td>
                            <td>{editingRow === item.id ? <input value={newValues.username} onChange={(e) => setNewValues({ ...newValues, username: e.target.value })} /> : item.username}</td>
                            <td>
                                {editingRow === item.id ? (
                                    <>
                                        <button className="btn btn-secondary mr-2" onClick={saveChanges}>
                                            Save
                                        </button>
                                        <button className="btn btn-danger" onClick={cancelEdit}>
                                            Cancel
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button className="btn btn-secondary mr-2" onClick={() => editRow(item.id)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger" onClick={() => deleteRow(item.id)}>
                                            Delete
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="5">
                            <button className="btn btn-primary" onClick={addRow}>
                                Add Row
                            </button>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <button className="btn btn-primary ml-2" onClick={handleSearch}>
                                Search
                            </button>
                            <button className="btn btn-secondary ml-2" onClick={clearFilter}>
                                Clear
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default Data;
