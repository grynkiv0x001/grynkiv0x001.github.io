import { FileIcon } from '@/assets/icons';

type ResumeDownloadProps = {
  className?: string;
};

const RESUME_URL = '/Resume.pdf';

export const ResumeDownload = ({ className = '' }: ResumeDownloadProps) => {
  const handleResumeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.ctrlKey || e.metaKey || e.button === 1) {
      return;
    }

    e.preventDefault();
    window.open(RESUME_URL, '_blank');
  };

  return (
    <a
      href={RESUME_URL}
      onClick={handleResumeClick}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        inline-flex items-center gap-2
        px-4 py-2
        bg-slate-900 dark:bg-slate-100
        text-slate-50 dark:text-slate-950
        font-semibold
        rounded-lg
        hover:bg-slate-800 dark:hover:bg-slate-200
        transition-colors duration-200
        cursor-pointer
        ${className}
      `}
      title="View resume in browser (PDF)"
    >
      <FileIcon className="fill-current" width={18} height={18} />
      <span>Resume</span>
    </a>
  );
};

