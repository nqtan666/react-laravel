import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

const Category = () => {
    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');

    const handleSubmit = (e) => {
        console.log(name, slug);
    };

    return (
        <div className="container mt-4">
            <div className="card p-4 shadow-sm">
                <h4 className="mb-3">Thêm Danh Mục</h4>
                <form>
                    <div className="mb-3">
                        <label className="form-label">Tên danh mục</label>
                        <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Slug</label>
                        <input type="text" className="form-control" value={slug} onChange={(e) => setSlug(e.target.value)} required />
                    </div>
                    <button type="button" onClick={handleSubmit} className="btn btn-primary">
                        Lưu
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Category;
