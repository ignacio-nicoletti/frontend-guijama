'use client';
import type { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { type FieldValues, type Path, useFormContext } from 'react-hook-form';
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '../../ui/input';

type CustomFormFieldProps<T extends FieldValues> = {
	label: string;
	placeholder: string;
	type?: HTMLInputTypeAttribute;
	loading?: boolean;
	name: Path<T>;
	onChange?: (e: ChangeEvent<HTMLInputElement> | string) => void;
	disabled?: boolean;
	min?: number;
	max?: number;
};

export const CustomFormField = <T extends FieldValues>({
	label,
	placeholder,
	type = 'text',
	name,
	onChange,
	disabled = false,
	min,
	max,
}: CustomFormFieldProps<T>) => {
	const { control } = useFormContext();

	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							type={type}
							placeholder={placeholder}
							autoCorrect="off"
							autoCapitalize="on"
							spellCheck="false"
							aria-autocomplete="none"
							min={min}
							max={max}
							disabled={disabled}
							{...field}
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								if (type === 'number') {
									const value = e.target.value === '' ? '' : Number(e.target.value);
									field.onChange(value);
								} else {
									field.onChange(e);
								}
								onChange?.(e);
							}}
						/>
					</FormControl>
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};
