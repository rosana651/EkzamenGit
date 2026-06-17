import React from 'react'
import { useState } from 'react'

const CreateProductForm = () => {
  //Состояние для отслеживания значения инпутов по их name 
 const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    image_url: ''
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  //Обновляет formData при вводе, берёт name атрибут инпута как ключ и записывает новое значение
  // ...formData - оператор spread который копирует предыдущие значения и добавляет новые
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  // Отправляет POST запрос на api при сабмите формы, показывает сообщение об успехе или ошибке
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('http://localhost/api/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (!response.ok) throw new Error('Product manufacturing error')

      const data = await response.json()
      setMessage({ type: 'success', text: 'Product created successfully' })
      setFormData({ name: '', description: '', image_url: '' })

    } catch (error) {
      setMessage({ type: 'error', text: error.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='max-w-xl mx-auto mt-10 p-8 bg-white border border-gray-200 rounded-xl mb-10'>
      <h2 className='text-xl font-medium tracking-widest mb-8'>CREATE PRODUCT</h2>

      {message && (
        <div className={`mb-6 p-4 rounded-lg text-sm ${message.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
          {message.text}
        </div>
      )}

      <form onSubmit={handleSubmit} className='flex flex-col gap-5 '>

        <div className='flex flex-col gap-1'>
          <label className='text-xs tracking-widest text-gray-500'>NAME</label>
          <input
            type='text'
            name='name'
            value={formData.name}
            onChange={handleChange}
            required
            className='border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-all'
            placeholder='Kaluga Caviar'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-xs tracking-widest text-gray-500'>DESCRIPTION</label>
          <textarea
            name='description'
            value={formData.description}
            onChange={handleChange}
            rows={4}
            className='border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-all resize-none'
            placeholder='Описание продукта...'
          />
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-xs tracking-widest text-gray-500'>CATEGORY</label>
          <select
            name='category'
            value={formData.category}
            onChange={handleChange}
            className='border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-all'
            >
            <option value='sea'>From the Sea</option>
            <option value='land'>From the Land</option>
            <option value='gifts-others'>Gifts and others</option>
          </select>
        </div>

        <div className='flex flex-col gap-1'>
          <label className='text-xs tracking-widest text-gray-500'>IMAGE URL</label>
          <input
            type='text'
            name='image_url'
            value={formData.image_url}
            onChange={handleChange}
            className='border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-gray-400 transition-all'
            placeholder='https://example.com/image.jpg'
          />
        </div>

        {formData.image_url && (
          <div className='flex flex-col gap-1'>
            <label className='text-xs tracking-widest text-gray-500'>PREVIEW</label>
            <img src={formData.image_url} alt='preview' className='w-full h-48 object-cover rounded-lg' />
          </div>
        )}

        <button type='submit' disabled={loading} className='mt-2 bg-black text-white text-sm tracking-widest py-3 rounded-lg hover:bg-gray-800 transition-all disabled:opacity-50'>
          {loading ? 'CREATING...' : 'CREATE PRODUCT'}
        </button>

      </form>
    </div>
  )
}

export default CreateProductForm
