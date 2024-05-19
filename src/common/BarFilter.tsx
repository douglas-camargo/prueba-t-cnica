import React from 'react';

interface BarFilterProps {
  css: string;
  actionFilter: (value: string) => void;
  restoreList: () => void;
  enabled: boolean;
  title?: string;
  containerFilter: string;
  maxLength: number;
}

const BarFilter: React.FC<BarFilterProps> = ({
  css,
  actionFilter,
  restoreList,
  enabled,
  title = "Búsqueda rápida",
  containerFilter,
  maxLength
}) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value && value.length > 1) {
      actionFilter(value);
    } else {
      restoreList();
    }
  };

  return (
    <div className={`${containerFilter}`}>
      <input
        disabled={!enabled}
        maxLength={maxLength}
        className={`${css} outline-none`}
        type="text"
        title={title}
        placeholder="Búsqueda rápida"
        onChange={handleChange}
        name="input filter"
      />
    </div>
  );
};

export default BarFilter;
