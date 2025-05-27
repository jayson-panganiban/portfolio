interface FileEntry {
  permissions: string
  owner: string
  size: string
  date: string
  name: string
  isDirectory?: boolean
  isRoot?: boolean
}

const files: FileEntry[] = [
  {
    permissions: 'drwxr-xr-x',
    owner: 'jayson',
    size: '4096',
    date: 'Jul 18 10:24',
    name: './',
    isRoot: true,
  },
  {
    permissions: '-rw-r--r--',
    owner: 'jayson',
    size: '8.4K',
    date: 'May 12 14:30',
    name: 'README.md',
  },
  {
    permissions: 'drwxr-xr-x',
    owner: 'jayson',
    size: '4206',
    date: 'Jul 03 20:22',
    name: 'phzipcodes',
    isDirectory: true,
  },
  {
    permissions: 'drwxr-xr-x',
    owner: 'jayson',
    size: '4096',
    date: 'Aug 20 20:08',
    name: 'halfprice-grocery',
    isDirectory: true,
  },
  {
    permissions: '-rwxr-xr-x',
    owner: 'jayson',
    size: '3.2K',
    date: 'Jan 26 15:29',
    name: 'rephrase',
    isDirectory: true,
  },
  {
    permissions: 'drwxr-xr-x',
    owner: 'jayson',
    size: '4096',
    date: 'Nov 17 19:38',
    name: 'rest-in-pytest',
    isDirectory: true,
  },
]

export const TerminalOutput = () => (
  <div className='text-xs md:text-sm'>
    {files.map((file, index) => (
      <div key={index}>
        <span className='text-emerald-400'>{file.permissions}</span>{' '}
        <span className='text-gray-200'>{file.owner}</span>{' '}
        <span className='text-yellow-300'>{file.size}</span>{' '}
        <span className='text-gray-200'>{file.date}</span>{' '}
        <span
          className={
            file.isDirectory ? 'text-blue-400' : file.isRoot ? 'text-emerald-300' : 'text-white'
          }
        >
          {file.name}
        </span>
      </div>
    ))}
  </div>
)
