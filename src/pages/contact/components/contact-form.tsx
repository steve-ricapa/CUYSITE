import { useMemo, useState, type FormEvent } from 'react'
import { ContactField } from './contact-field'

type FormState = {
  name: string
  business: string
  email: string
  whatsapp: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  business: '',
  email: '',
  whatsapp: '',
  message: '',
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const errorList = useMemo(() => Object.entries(errors), [errors])

  const handleChange = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitted(false)
  }

  const validate = () => {
    const nextErrors: FormErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Ingresa tu nombre.'
    if (!form.business.trim()) nextErrors.business = 'Cuéntanos el nombre de tu negocio o marca.'
    if (!form.email.trim()) {
      nextErrors.email = 'Ingresa un correo.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      nextErrors.email = 'Ingresa un correo valido.'
    }
    if (!form.whatsapp.trim()) nextErrors.whatsapp = 'Ingresa un numero de contacto.'
    if (!form.message.trim()) {
      nextErrors.message = 'Cuéntanos que necesitas para poder orientarte mejor.'
    } else if (form.message.trim().length < 20) {
      nextErrors.message = 'Agrega un poco mas de detalle para entender tu proyecto.'
    }

    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!validate()) {
      setSubmitted(false)
      return
    }

    setSubmitted(true)
    setForm(initialState)
    setErrors({})
  }

  return (
    <form className="grid gap-5" noValidate onSubmit={handleSubmit}>
      {errorList.length > 0 ? (
        <div className="status-box status-error" role="alert" aria-live="polite">
          Revisa los campos marcados antes de enviar tu solicitud.
        </div>
      ) : null}

      {submitted ? (
        <div className="status-box status-success" role="status" aria-live="polite">
          Gracias. Tu solicitud quedo lista para seguimiento. Ahora puedes reemplazar este flujo por WhatsApp, correo real o backend cuando quieras.
        </div>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <ContactField
          id="name"
          label="Nombre"
          value={form.name}
          onChange={(value) => handleChange('name', value)}
          error={errors.name}
          autoComplete="name"
          placeholder="Tu nombre"
        />
        <ContactField
          id="business"
          label="Negocio"
          value={form.business}
          onChange={(value) => handleChange('business', value)}
          error={errors.business}
          autoComplete="organization"
          placeholder="Nombre de tu negocio"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <ContactField
          id="email"
          label="Correo"
          type="email"
          value={form.email}
          onChange={(value) => handleChange('email', value)}
          error={errors.email}
          autoComplete="email"
          placeholder="tu@correo.com"
        />
        <ContactField
          id="whatsapp"
          label="WhatsApp"
          type="tel"
          value={form.whatsapp}
          onChange={(value) => handleChange('whatsapp', value)}
          error={errors.whatsapp}
          autoComplete="tel"
          placeholder="Tu numero"
        />
      </div>

      <div className="field">
        <label htmlFor="message" className="field-label">
          ¿Que necesitas?
        </label>
        <textarea
          id="message"
          className="input-base min-h-[9rem] resize-none"
          placeholder="Cuéntanos tu idea, tipo de pagina, referencias y objetivo principal."
          value={form.message}
          onChange={(event) => handleChange('message', event.target.value)}
          aria-invalid={errors.message ? 'true' : 'false'}
          aria-describedby={errors.message ? 'message-error' : 'message-help'}
        />
        <p id="message-help" className="field-help">
          Ejemplo: web para mi negocio, 5 secciones, contacto por WhatsApp y estilo moderno.
        </p>
        {errors.message ? (
          <p id="message-error" className="field-error" role="alert">
            {errors.message}
          </p>
        ) : null}
      </div>

      <button type="submit" className="btn-primary w-full sm:w-fit">
        Solicitar cotizacion
      </button>
    </form>
  )
}
