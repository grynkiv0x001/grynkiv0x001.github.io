import { CopyIcon } from '@/assets/icons';

type ContactLinkProps = {
  text: string;
  href?: string;
  isListItem?: boolean;
  hasCopyIcon?: boolean;
  copyText?: string;
}

export const ContactLink = ({ text, href, isListItem, hasCopyIcon, copyText }: ContactLinkProps) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText || text);
  };

  const Wrapper = isListItem ? 'li' : 'div';

  return (
    <Wrapper className="flex items-center gap-2">
      {href ? (
        <a href={href}>{text}</a>
      ) : (
        <span>{text}</span>
      )}
      {hasCopyIcon && (
        <button
          onClick={handleCopy}
          className="p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded cursor-pointer"
          title={`Copy ${text}`}
          type="button"
        >
          <CopyIcon />
        </button>
      )}
    </Wrapper>
  );
};
