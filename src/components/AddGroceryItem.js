import React, { useState } from 'react';

const AddGroceryItem = ({ addItem }) => {
    const [item, setItem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item) {
            addItem(item);
            setItem('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={item}
                onChange={(e) => setItem(e.target.value)}
                placeholder="Add Grocery Item"
                required
            />
            <button type="submit">Add Item</button>
        </form>
    );
};

export default AddGroceryItem;
