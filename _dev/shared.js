function odin_language_definition(a) {
	const SINGLE_LINE_COMMENT = {
		className: 'comment',
		begin: '//',
		end: '$'
	};
	const MULTI_LINE_COMMENT = {
		className: 'comment',
		begin: `/\\*`,
		end: `\\*/`,
	};

	return {
		name: "odin",
		aliases: ["odin","odinlang","odin-lang"],
		disableAutodetect: false,
		case_insensitive: false,
		keywords: {
			keyword: "auto_cast bit_field bit_set break case cast context continue defer distinct do dynamic else enum fallthrough for foreign if import in map matrix not_in or_break or_continue or_else or_return package proc return struct switch transmute type_of typeid union using when where",
			literal:"true false nil",
			built_in:"abs align_of cap clamp complex conj expand_to_tuple imag jmag kmag len max min offset_of quaternion real size_of soa_unzip soa_zip swizzle type_info_of type_of typeid_of"
		},
		illegal: "</",
		contains: [
			SINGLE_LINE_COMMENT,
			MULTI_LINE_COMMENT,
			{
				className:"string",
				variants: [
					a.QUOTE_STRING_MODE,
					{begin:"'",end:"[^\\\\]'"},
					{begin:"`",end:"`"}
				]
			},
			{
				className: "number",
				variants:[{begin:a.C_NUMBER_RE+"[ijk]",relevance:1},a.C_NUMBER_MODE]
			}
		]
	}
}