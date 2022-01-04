import clsx from "clsx"; //nos permite concatenar clases y detecta ya si una clase está definida.

export function Button({ className, ...props }) {
  return (
    <button
      className={clsx(
        "rounded-md h-14 px-6 text-lg font-bold text-white",
        className
      )}
      {...props}
    />
  );
}
