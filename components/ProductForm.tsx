"use client";

import Image from "next/image";
import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useState,
} from "react";

interface Category {
  _id: string;
  name: string;
  slug: string;
}

interface UploadResult {
  imageUrl: string;
  imagePublicId: string;
}

const initialForm = {
  name: "",
  slug: "",
  description: "",
  price: "",
  stock: "",
  category: "",
  imageUrl: "",
  imagePublicId: "",
  published: true,
};

export default function ProductForm() {
  const [form, setForm] = useState(initialForm);
  const [categories, setCategories] = useState<Category[]>([]);
  const [uploading, setUploading] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadCategories();
  }, []);

  async function loadCategories() {
    try {
      const response = await fetch("/api/categories");
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setCategories(data.categories);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "โหลดหมวดหมู่ไม่สำเร็จ"
      );
    }
  }

  function createSlug(value: string) {
    return value
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^a-z0-9ก-๙-]/g, "");
  }

  function handleNameChange(value: string) {
    setForm((previous) => ({
      ...previous,
      name: value,
      slug: createSlug(value),
    }));
  }

}