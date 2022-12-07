*** Settings ***
Documentation    application-testing
Library    SeleniumLibrary

*** Test Cases ***
Testataan että sovellus käynnistyy
    Open Browser    http://localhost:3000/    Safari
    # Suurennetaan ikkuna
    Maximize Browser Window
    # Etsii sivulta sanan Projects
    Wait Until Page Contains    Home
    # Odotetaan hetki
    Sleep    3s
    # Suljetaan ohjelma
    [Teardown]    Close Window

Testataan että Home painike toimii ja sivusto renderöityy
    Open Browser    http://localhost:3000/Projects    Safari
    # Suurennetaan ikkuna
    Maximize Browser Window
    # Testataan renderöityykö headeri
    Wait Until Element Is Visible    id:root
    # Klikataan linkkiä
    Click Link    Home
    # Etsii sivulta sanan Projects
    Wait Until Page Contains    Home
    # Odotetaan hetki
    Sleep    3s
    # Suljetaan ohjelma, ohjelma sulkeutuu myös virhetilanteessa
    [Teardown]    Close Window

Testataan että sovelluksen Projects sivu toimii
    Open Browser    http://localhost:3000    Safari
    # Suurennetaan ikkuna
    Maximize Browser Window
    # Testataan renderöityykö headeri
    Wait Until Element Is Visible    id:root
    # Klikataan linkkiä
    Click Link    Projects
    # Etsii sivulta sanan Projects
    Wait Until Page Contains    Projects
    # Odotetaan hetki
    Sleep    3s
    # Suljetaan ohjelma, ohjelma sulkeutuu myös virhetilanteessa
    [Teardown]    Close Window
