import { Plugin } from 'ckeditor5/src/core';

export default class AudioEditing extends Plugin {
	init() {
		this._defineSchema();
		// console.log( 'AudioUI#init() got called, schema is defined' );
		this._defineConverters();
		// console.log( 'Converters for Audio have been defined' );
	}

	_defineSchema() {
		const schema = this.editor.model.schema;
		schema.register( 'simpleaudio', {
			isObject: true,
			isBlock: true,
			allowAttributes: [ 'source', 'controls' ],
			allowWhere: '$text',
			allowChildren: '$text'
		} );
	}

	_defineConverters() {
		const conversion = this.editor.conversion;

		conversion.for( 'downcast' ).elementToElement( {
			model: {
				name: 'simpleaudio',
				attributes: [ 'controls, source' ]
			},
			view: ( modelElement, { writer } ) => {
				// console.log(modelElement);
				return writer.createContainerElement( 'audio', {
					controls: modelElement.getAttribute( 'controls' ), src: modelElement.getAttribute( 'source' )
				} );
			}
		} );

		conversion.for( 'upcast' ).elementToElement( {
			view: {
				name: 'audio',
				attributes: [ 'controls', 'src' ]
			},
			model: ( viewElement, { writer } ) => {
				// console.log(viewElement);
				return writer.createElement( 'simpleaudio', {
					controls: viewElement.getAttribute( 'controls' ), source: viewElement.getAttribute( 'src' )
				} );
			}
		} );
	}
}
