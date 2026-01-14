const HOTEL_FIELDS=[
    "id",
    "hash_code",
    "hotel_id",
    "hotel_name",
    "wsdl_url",
    "wsdl_login",
    "wsdl_password",
    "quota",
    "site_url",
    "time_check_in",
    "time_check_out",
    "payment_method",
    "payment_section",
    "description"
]

const BANK_FIELDS=[
    'id',
    'hash_code',
    'bank_name',
    'login',
    'password',
    'is_active',
    'created_at'
]

const MAIL_FIELDS=[
    "id",
    "hash_code",
    "smtp_host",
    "smtp_port",
    "smtp_secure",
    "smtp_username",
    "smtp_password",
    "smtp_from_email",
    "smtp_from_name"
]
  
module.exports={ HOTEL_FIELDS, BANK_FIELDS, MAIL_FIELDS }