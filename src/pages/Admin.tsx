import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Upload, Trash2, Plus } from 'lucide-react';
import { useDropzone } from 'react-dropzone';

const Admin = () => {
  const [images, setImages] = useState<string[]>([]);
  const [uploading, setUploading] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    if (password === "admin123") {
      setIsAuthenticated(true);
    } else {
      alert("密码错误");
    }
  };

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImages(data);
    } catch (err) {
      console.error("Failed to fetch images", err);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchImages();
    }
  }, [isAuthenticated]);

  const onDrop = useCallback(async (acceptedFiles: File[]) => {
    setUploading(true);
    for (const file of acceptedFiles) {
      const formData = new FormData();
      formData.append("image", file);
      try {
        await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
      } catch (err) {
        console.error("Upload failed", err);
      }
    }
    setUploading(false);
    fetchImages();
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ 
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif', '.webp']
    }
  } as any);

  const deleteImage = async (filename: string) => {
    if (!confirm(`确定删除 ${filename} 吗？`)) return;
    try {
      await fetch(`/api/images/${filename}`, { method: "DELETE" });
      fetchImages();
    } catch (err) {
      console.error("Delete failed", err);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass-card p-12 rounded-3xl w-full max-w-md space-y-8"
        >
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter">管理登录</h1>
            <p className="text-white/50 font-mono text-xs uppercase tracking-widest">Admin Authentication</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-mono uppercase tracking-widest text-white/50 ml-1">请输入密码</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent transition-colors"
                placeholder="••••••••"
              />
            </div>
            <div className="flex gap-4">
              <button 
                type="button"
                onClick={() => navigate("/")}
                className="flex-1 glass-button py-4 rounded-2xl text-xs font-mono uppercase tracking-widest"
              >
                返回
              </button>
              <button 
                type="submit"
                className="flex-1 bg-white text-black hover:bg-accent hover:text-white py-4 rounded-2xl text-xs font-mono font-bold uppercase tracking-widest transition-all"
              >
                登录
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white p-8 pt-32">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <h1 className="text-4xl font-bold tracking-tighter">图片管理器</h1>
            <p className="text-white/50 font-mono text-xs mt-2 uppercase tracking-widest">Simple Image Manager</p>
          </div>
          <button 
            onClick={() => navigate("/")}
            className="glass-button px-6 py-2 rounded-full text-xs font-mono uppercase tracking-widest"
          >
            返回首页
          </button>
        </div>

        {/* Upload Area */}
        <div 
          {...getRootProps()} 
          className={`border-2 border-dashed rounded-3xl p-12 text-center transition-all cursor-pointer
            ${isDragActive ? 'border-accent bg-accent/5' : 'border-white/10 hover:border-white/20 bg-white/5'}
          `}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center">
              <Upload size={24} className={uploading ? "animate-bounce" : ""} />
            </div>
            <div>
              <p className="text-lg font-medium">{uploading ? "正在上传..." : "拖拽图片到这里，或点击上传"}</p>
              <p className="text-white/40 text-sm mt-1">支持 JPG, PNG, WEBP 等格式</p>
            </div>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {images.map((img) => (
            <motion.div 
              key={img}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="group relative aspect-square bg-white/5 rounded-2xl overflow-hidden border border-white/5"
            >
              <img 
                src={`/images/${img}`} 
                alt={img} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-3 p-4">
                <p className="text-[10px] font-mono truncate w-full text-center">{img}</p>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(`/images/${img}`);
                      alert("路径已复制: " + `/images/${img}`);
                    }}
                    className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all"
                    title="复制路径"
                  >
                    <Plus size={14} />
                  </button>
                  <button 
                    onClick={() => deleteImage(img)}
                    className="p-2 bg-red-500/20 hover:bg-red-500 text-red-500 hover:text-white rounded-full transition-all"
                    title="删除"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
          {images.length === 0 && !uploading && (
            <div className="col-span-full py-20 text-center text-white/20 font-mono text-sm uppercase tracking-widest">
              暂无图片
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
