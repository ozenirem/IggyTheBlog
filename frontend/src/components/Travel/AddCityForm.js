import React, { useState } from 'react';
import axios from 'axios';
import '../Travel/AddCityForm.css';

const AddCityForm = () => {
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [sections, setSections] = useState([]);

  const handleAddSection = (type) => {
    setSections([...sections, { type, value: '' }]);
  };

  const handleSectionChange = (index, value) => {
    const newSections = [...sections];
    newSections[index].value = value;
    setSections(newSections);
  };

  const handleImageChange = (index, file) => {
    const newSections = [...sections];
    newSections[index].file = file;
    setSections(newSections);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('country', country);
    formData.append('city', city);
    formData.append('title', title);
    formData.append('description', description);

    sections.forEach((section, i) => {
      formData.append(`sections[${i}].type`, section.type);
      if (section.type === 'image') {
        formData.append(`sections[${i}].file`, section.file);
      } else {
        formData.append(`sections[${i}].value`, section.value);
      }
    });

    try {
      await axios.post('/api/travel/add', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('City Travel Info Added');
    } catch (err) {
      console.error(err);
      alert('Error adding travel info');
    }
  };

  return (
    <form className="add-city-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} required />
      <input type="text" placeholder="City" value={city} onChange={(e) => setCity(e.target.value)} required />
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />

      <div className="section-buttons">
        <button type="button" onClick={() => handleAddSection('text')}>Add Text</button>
        <button type="button" onClick={() => handleAddSection('image')}>Add Image</button>
      </div>

      {sections.map((section, index) => (
        <div key={index} className="section-block">
          {section.type === 'text' ? (
            <textarea
              placeholder="Enter text"
              value={section.value}
              onChange={(e) => handleSectionChange(index, e.target.value)}
            />
          ) : (
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleImageChange(index, e.target.files[0])}
            />
          )}
        </div>
      ))}

      <button type="submit">Save</button>
    </form>
  );
};

export default AddCityForm;