"use client"

export default function CategoryForm() {
    return (
        <div>
            <h1>Category Form</h1>
            <form>
                <input name="name" placeholder="ประเภท"/>
                <textarea name="description" placeholder="ลายละเอียด"></textarea>
            </form>
        </div>
    );
}