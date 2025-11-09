import { motion } from 'framer-motion';
import { LucideIcon, X, Check } from 'lucide-react';
import clsx from 'clsx';

interface BeforeAfterCardProps {
  beforeIcon: LucideIcon;
  afterIcon: LucideIcon;
  beforeTitle: string;
  afterTitle: string;
  beforeDescription: string;
  afterDescription: string;
  delay?: number;
  className?: string;
}

export const BeforeAfterCard = ({
  beforeIcon: BeforeIcon,
  afterIcon: AfterIcon,
  beforeTitle,
  afterTitle,
  beforeDescription,
  afterDescription,
  delay = 0,
  className = '',
}: BeforeAfterCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      className={clsx('grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4', className)}
    >
      {/* ANTES (Before) */}
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-white rounded-xl p-4 shadow-lg border-2 border-red-100 hover:border-red-200 hover:shadow-xl transition-all duration-500 ease-out"
      >
        <div className="absolute -top-2 left-4 bg-red-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
          Antes
        </div>

        <div className="mt-1 flex items-start gap-3">
          <div className="flex-shrink-0 w-9 h-9 bg-red-100 rounded-lg flex items-center justify-center">
            <X className="w-4 h-4 text-red-600" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <BeforeIcon className="w-4 h-4 text-red-600" />
              <h4 className="font-bold text-sm text-gray-800">{beforeTitle}</h4>
            </div>
            <p className="text-xs text-gray-600 leading-tight">{beforeDescription}</p>
          </div>
        </div>
      </motion.div>

      {/* DESPUÉS (After) */}
      <motion.div
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative bg-white rounded-xl p-4 shadow-lg border-2 border-green-100 hover:border-green-200 hover:shadow-xl transition-all duration-500 ease-out"
      >
        <div className="absolute -top-2 left-4 bg-green-500 text-white px-2 py-0.5 rounded-full text-[10px] font-bold">
          Después
        </div>

        <div className="mt-1 flex items-start gap-3">
          <div className="flex-shrink-0 w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
            <Check className="w-4 h-4 text-green-600" />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-1.5 mb-1">
              <AfterIcon className="w-4 h-4 text-green-600" />
              <h4 className="font-bold text-sm text-gray-800">{afterTitle}</h4>
            </div>
            <p className="text-xs text-gray-600 leading-tight">{afterDescription}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
