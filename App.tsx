import React, { useState } from 'react';
import { Folder, FileText, ChevronRight, ChevronDown, Copy, Check, Terminal, Menu, X, Shield, Book, Disc } from 'lucide-react';
import { REPOSITORY_DATA, FileSystemNode } from './repositoryData';

// --- Components ---

const FileIcon = ({ name }: { name: string }) => {
  if (name.includes('MANIFESTO') || name.includes('PROTOCOL')) return <Shield className="w-4 h-4 text-amber-400" />;
  if (name.includes('DISCOGRAPHY') || name.includes('ALBUM')) return <Disc className="w-4 h-4 text-purple-400" />;
  if (name.includes('README')) return <Book className="w-4 h-4 text-blue-400" />;
  return <FileText className="w-4 h-4 text-eastward-400" />;
};

interface TreeNodeProps {
  node: FileSystemNode;
  level?: number;
  onSelect: (node: FileSystemNode) => void;
  selectedId: string | null;
}

const TreeNode: React.FC<TreeNodeProps> = ({ 
  node, 
  level = 0, 
  onSelect, 
  selectedId 
}) => {
  const [isOpen, setIsOpen] = useState(true); // Default open for visibility
  const isSelected = selectedId === node.id;

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleClick = () => {
    if (node.type === 'file') {
      onSelect(node);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div>
      <div 
        className={`
          flex items-center py-1 px-2 cursor-pointer select-none transition-colors
          ${isSelected ? 'bg-eastward-700 text-white' : 'text-eastward-300 hover:bg-eastward-800 hover:text-white'}
        `}
        style={{ paddingLeft: `${level * 1.5 + 0.5}rem` }}
        onClick={handleClick}
      >
        <span className="mr-1.5 flex-shrink-0">
          {node.type === 'directory' && (
            <span onClick={handleToggle} className="hover:text-white p-0.5 rounded">
              {isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
            </span>
          )}
          {node.type === 'file' && <span className="w-4 inline-block" />}
        </span>
        
        <span className="mr-2 flex-shrink-0">
          {node.type === 'directory' ? <Folder className="w-4 h-4 text-eastward-500" /> : <FileIcon name={node.name} />}
        </span>
        
        <span className="text-sm font-medium truncate">{node.name}</span>
      </div>

      {node.type === 'directory' && isOpen && node.children && (
        <div>
          {node.children.map(child => (
            <TreeNode 
              key={child.id} 
              node={child} 
              level={level + 1} 
              onSelect={onSelect}
              selectedId={selectedId}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FileViewer = ({ file }: { file: FileSystemNode | null }) => {
  const [copied, setCopied] = useState(false);

  if (!file) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-eastward-500 p-8 text-center">
        <Terminal className="w-16 h-16 mb-4 opacity-20" />
        <h2 className="text-xl font-bold mb-2">Eastward Protocol Archive</h2>
        <p className="max-w-md">Select a file from the repository explorer to view the canonical artifacts.</p>
      </div>
    );
  }

  const handleCopy = () => {
    if (file.content) {
      navigator.clipboard.writeText(file.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col h-full bg-eastward-800">
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-eastward-700 bg-eastward-900">
        <div className="flex items-center space-x-3">
          <FileIcon name={file.name} />
          <span className="font-mono text-sm font-bold text-eastward-100">{file.name}</span>
          <span className="px-2 py-0.5 rounded-full bg-eastward-800 text-xs text-eastward-400 border border-eastward-700">
            {file.content?.length} bytes
          </span>
        </div>
        <button 
          onClick={handleCopy}
          className="flex items-center space-x-2 px-3 py-1.5 rounded bg-eastward-700 hover:bg-eastward-600 transition-colors text-xs font-medium"
        >
          {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
          <span>{copied ? 'Copied' : 'Raw Copy'}</span>
        </button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <pre className="font-mono text-sm leading-relaxed whitespace-pre-wrap text-eastward-300">
            {file.content}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [selectedFile, setSelectedFile] = useState<FileSystemNode | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  // Auto-select the manifesto on load
  React.useEffect(() => {
    const core = REPOSITORY_DATA.children?.find(c => c.name === '00_CANONICAL_CORE');
    const manifesto = core?.children?.find(c => c.name === 'MASTER_MANIFESTO.md');
    if (manifesto) setSelectedFile(manifesto);
  }, []);

  return (
    <div className="flex h-screen w-screen bg-eastward-900 text-eastward-100 font-sans overflow-hidden">
      {/* Mobile Sidebar Toggle */}
      <button 
        className="md:hidden fixed top-4 left-4 z-50 p-2 bg-eastward-800 rounded-md border border-eastward-700"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Sidebar */}
      <div 
        className={`
          fixed inset-y-0 left-0 z-40 w-80 bg-eastward-900 border-r border-eastward-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        <div className="flex items-center px-4 py-4 border-b border-eastward-800">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mr-3">
            <span className="font-bold text-white text-xs">EP</span>
          </div>
          <div>
            <h1 className="font-bold text-sm tracking-wide">EASTWARD PROTOCOL</h1>
            <p className="text-xs text-eastward-500 font-mono">v1.0.0 [CANONICAL]</p>
          </div>
        </div>
        
        <div className="overflow-y-auto h-[calc(100vh-65px)] py-4">
          <TreeNode 
            node={REPOSITORY_DATA} 
            onSelect={(node) => {
              setSelectedFile(node);
              if (window.innerWidth < 768) setIsSidebarOpen(false);
            }} 
            selectedId={selectedFile?.id || null} 
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full w-full overflow-hidden relative">
        <FileViewer file={selectedFile} />
      </div>
    </div>
  );
}