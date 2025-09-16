import { useState } from "react";

const AddBookForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    publishedYear: "",
    genre: "",
    language: "",
    country: "",
    rating: "",
    summary: "",
    coverImageUrl: "",
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    let newValue = value;

    if (["publishedYear", "rating"].includes(name)) {
      newValue = value === "" ? "" : parseInt(value, 10);
    }

    if (["genre"].includes(name)) {
      newValue = value.split(",").map((v) => v.trim());
    }

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("https://bookapp-sooty.vercel.app/book", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to add book.");
      }
      await response.json();

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 3000);

      setFormData({
        title: "",
        author: "",
        publishedYear: "",
        genre: "",
        language: "",
        country: "",
        rating: "",
        summary: "",
        coverImageUrl: "",
      });
    } catch (error) {
      console.log("Failed to add book",error);
    }
  };

  return (
    <div>
      <h2>Add New Book</h2>
      {success ? (
        <p style={{ color: "green" }}>Book Added Successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Author:</label>
          <br />
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Release Year:</label>
          <br />
          <input
            type="number"
            name="publishedYear"
            value={formData.publishedYear}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Genre:</label>
          <br />
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Language:</label>
          <br />
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Country:</label>
          <br />
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Rating:</label>
          <br />
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Summary:</label>
          <br />
          <input
            type="text"
            name="summary"
            value={formData.summary}
            onChange={handleChange}
          />
          <br />
          <br />
          <label>Cover Image Url:</label>
          <br />
          <input
            type="text"
            name="coverImageUrl"
            value={formData.coverImageUrl}
            onChange={handleChange}
          />
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default AddBookForm;
