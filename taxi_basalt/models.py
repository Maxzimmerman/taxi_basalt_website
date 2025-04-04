from django.db import models

# Create your models here.

# class HomeSection(models.Model):
#     hero_header = models.CharField("Kopf Text", max_length=100)
#     hero_text = models.CharField("Text", max_length=200)
#     hero_button_text = models.CharField("Button Text", max_length=50)
#     hero_image = models.ImageField("Bild", upload_to="hero_images/")
#
#     def __str__(self):
#         return self.hero_header
#
#
# class ServiceSection(models.Model):
#     header = models.CharField("Kopf Text", max_length=100)
#
#     def __str__(self):
#         return self.header
#
#
# class Service(models.Model):
#     title = models.CharField("Titel", max_length=100)
#     detail_title = models.CharField("Detail Titel", max_length=100, null=True, blank=True)
#     text = models.CharField("Text", max_length=200)
#     home_section = models.ForeignKey(
#         ServiceSection,
#         on_delete=models.CASCADE,
#         related_name="services")
#
#     def __str__(self):
#         return self.title
#
#
# class VehicleSection(models.Model):
#     header = models.CharField("Kopf Text", max_length=100)
#     text = models.CharField("Text", max_length=200)
#
#     def __str__(self):
#         return self.header
#
#
# class Vehicle(models.Model):
#     header = models.CharField("Kopf Text", max_length=100)
#     image = models.ImageField("Bild", upload_to="vehicles/")
#     vehicle_section = models.ForeignKey(
#         VehicleSection,
#         on_delete=models.CASCADE,
#         related_name="vehicles")
#
#     def __str__(self):
#         return self.header


class FooterSection(models.Model):
    telephone_header = models.CharField("Telefon Kopf Text", max_length=100)
    telephone_text = models.CharField("Telefon Text", max_length=200)
    fax_header = models.CharField("Fax Kopf Text", max_length=100)
    fax_text = models.CharField("Fax Text", max_length=200)
    mobile_header = models.CharField("Mobil Kopf Text", max_length=100)
    mobile_text = models.CharField("Mobil Text", max_length=200)
    email_header = models.CharField("Email Kopf Text", max_length=100)
    email_text = models.CharField("Email Text", max_length=200)
    website_header = models.CharField("Website Kopf Text", max_length=100)
    website_text = models.CharField("Website Text", max_length=200)
    address_header = models.CharField("Adresse Kopf Text", max_length=100)
    address_text = models.TextField("Adresse Text")
    logo = models.ImageField("Logo", upload_to="footer/")
