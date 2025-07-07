import styles from "./AddItemForm.module.css";

export const AddItemForm = ({ handleSubmit, form, setForm }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <>
      <form className={styles.container} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <label htmlFor="name">Desejo</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="urlImage">URL Imagem</label>
          <input
            type="text"
            name="urlImage"
            value={form.urlImage}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="date">Data</label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
          />
        </div>
        <button className={styles.button} type="submit">
          Adicionar
        </button>
      </form>
    </>
  );
};
