export const manifest = {
    "widget": {
        "name": "widget.name",
        "description": "widget.description",
        "short_description": "widget.short_description",
        "version": "0.0.1",
        "interface_version": 2,
        "init_once": true,
        "locale": [
            "en",
            "es"
        ],
        "installation": true,
        "support": {
            "link": "https://www.example.com",
            "email": "support@example.com"
        }
    },
    "locations": [
        "lcard-1", // Tarjeta de lead
        "llist-0", // Listas de leads
        "ccard-1", // Tarjeta de contacto
        "clist-0", // Listas de contactos
        "comcard-0", // Tarjeta de compañía
        "card_sdk", // SDK de tarjeta (requiere lcard/ccard/comcard para funcionar con esas entidades)
        "settings", // Página de instalación y configuración del widget
        "digital_pipeline", // Configuración del embudo digital
        "lead_sources", // Fuentes de leads
        "catalogs", // SDK de listas
        "advanced_settings", // Página de configuración avanzada del widget
        "ai_agent" // El widget se muestra en el bloque de configuración del agente de IA
    ],
    /* "tour": {
        "is_tour": true, // Si se habilita el tour
        "tour_images": {
            "en": [
                "/images/tour_1_en.png",
                "/images/tour_2_en.png",
                "/images/tour_3_en.png"
            ],
            "es": [
                "/images/tour_1_es.png",
                "/images/tour_2_es.png",
                "/images/tour_3_es.png"
            ]
        },
        "tour_description": "widget.tour_description"
    }, */
    "settings": {
        "login": {
            "name": "settings.login",
            "type": "text",
            "required": true
        },
        "api_key": {
            "name": "settings.api_key",
            "type": "text",
            "required": true
        },
        "account": {
            "name": "settings.account",
            "type": "text",
            "required": true
        }
    },
    /* "dp": {
        "settings": {
            "message": {
                "name": "dp.message",
                "type": "text",
                "required": true
            }
        },
        "action_multiple": false,
        "webhook_url": "https://example.com/webhook"
    }, */
    /* "advanced": {
        "title": "advanced.title"
    }, */
    /* "salesbot_designer": {
        "handler_code": {
            "name": "salesbot.handler_name",
            "settings": {
                "button_title": {
                    "name": "salesbot.button_title",
                    "type": "text",
                    "default_value": "salesbot.button_title_default_value",
                    "manual": true
                },
                "button_caption": {
                    "name": "salesbot.button_caption",
                    "type": "text",
                    "default_value": "salesbot.button_caption_default_value",
                    "manual": true
                },
                "text": {
                    "name": "salesbot.text",
                    "type": "text"
                },
                "number": {
                    "name": "salesbot.number",
                    "type": "numeric"
                },
                "url": {
                    "name": "salesbot.url",
                    "type": "url"
                }
            }
        }
    }, */
    /* "sms": {
        "endpoint": "https://example.com/sms_endpoint"
    }, */
    /* w */
}