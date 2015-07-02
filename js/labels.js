// Traduction des labels de la fiche de métadonnées
var lb = {
    fr: {
        none: 'Aucune',
    
        // Idenfiant de la fiche
        MD_FileIdentifier_label: 'Identifiant',
        MD_FileIdentifier_description: 'identifiant de la fiche',
        
        MD_Language_label: 'Langue',
        MD_Language_description: 'langue de la fiche',
        MD_CharacterSet_label: 'Encodage',
        MD_CharacterSet_description: 'encodage de la fiche',
        MD_HierarchyLevel_label: 'Type de fiche',
        MD_HierarchyLevel_description: 'Type de fiche',
        MD_DateStamp_label: 'Date de mise à jour',
        MD_DateStamp_description: 'Date de création/mise à jour de la fiche',
        MD_StandardName_label: 'Standard de description',
        MD_StandardName_description: 'Standard de description de la fiche',
        MD_StandardVersion_label: 'Version du standard de description',
        MD_StandardVersion_description: 'Version du standard de description de la fiche',
       
        // Type de données
        Data_SpatialRepresentationType_label: 'Type de représentation',
        Data_SpatialRepresentationType_description: '',
        
        // Echelle
        Data_ScaleDenominator_label: 'Echelle',
        Data_ScaleDenominator_description: 'Echelle optimale d\'utilisation des données',
        // Résolution
        Data_ScaleDistance_label: 'Résolution',
        Data_ScaleDistance_description: 'Résolution des données',
        
        // Système de projection
        Data_ReferenceSystemCode_label: 'Système(s) de projection',
        Data_ReferenceSystemCode_description: 'Système(s) de projection',
        
        // Format de diffusion
        Data_DistFormatName_label: 'Format',
        Data_DistFormatName_description: 'Nom du format de diffusion des donées',
        Data_DistFormatSpecification_label: 'Description',
        Data_DistFormatSpecification_description: 'Description du format de diffusion des donées',
        Data_DistFormatVersion_label: 'Version',
        Data_DistFormatVersion_description: 'Version du format de diffusion des donées',
        
        // Qualité
        Data_LI_Statement_label: 'Qualité des données',
        Data_LI_Statement_description: 'Texte sur la qualité des données',
        
        // Identifiant des données
        Data_IdentifierCode_label: 'Identifiant',
        Data_IdentifierCode_descripton: 'Identifiant de la base de données',
        Data_IdentifierCodespace_label: 'Espace de nommage',
        Data_IdentifierCodespace_descripton: 'Espace de nommage de l\identifiant de la base de données',
        
        // Langue des données
        Data_Language_label: 'Langue(s)',
        Data_Language_description: 'Langue(s) des données',
        
        // CharacterSet
        Data_CharacterSet_label: 'Encodage des données',
        Data_CharacterSet_description: 'Encodage des données',
        
        // Contact
        CntName_label: 'Nom',
        CntName_description: 'Nom du contact',
        CntFunction_label: 'Fonction',
        CntFunction_description: 'Fonction du contact',
        CntOrganism_label: 'Organisme',
        CntOrganism_description: 'Organisme du contact',
        CntAddress_label: 'Adresse',
        CntAddress_description: 'Adresse du contact',
        CntPostalCode_label: 'Code postal',
        CntPostalCode_description: 'Code postal du contact',
        CntCity_label: 'Ville',
        CntCity_description: 'Ville du contact',
        CntPhone_label: 'Téléphone',
        CntPhone_description: 'Téléphone du contact',
        CntEmail_label: 'Email',
        CntEmail_description: 'Email du contact',
        CntRole_label: 'Rôle',
        CntRole_description: 'Rôle du contact',
        CntLogo_label: 'Logo',
        CntLogo_description: 'Logo du contact',
        
        // Fréquence de mise à jour
        Data_MaintenanceFrequency_label: 'Fréquence de mise à jour',
        Data_MaintenanceFrequency_description: 'Fréquence de mise à jour des données',
        
        // Dates
        DateCreation_label: 'Création',
        DateCreation_description: 'Date de création de la ressource',
        DatePublication_label: 'Publication',
        DatePublication_description: 'Date de publication de la ressource',
        DateRevision_label: 'Révision',
        DateRevision_description: 'Date de révision de la ressource',
        
        Data_Classification_label: 'Classification',
        Data_Classification_description: 'Type de classification',
        Data_AccessRestrictionCode_label: 'Restriction d\'accès',
        Data_AccessRestrictionCode_description: 'Restriction d\'accès',
        Data_AccessOtherConstraint_label: 'Autre restriction d\'accès',
        Data_AccessOtherConstraint_description: 'Autre restriction d\'accès',
        Data_UseRestrictionCode_label: 'Restriction d\'usage',
        Data_UseRestrictionCode_description: 'Restriction d\'usage',
        Data_UseOtherConstraint_label: 'Autre restriction d\'usage',
        Data_UseOtherConstraint_description: 'Autre restriction d\'usage',
        Data_UseLimitation_label: 'Limite d\'usage',
        Data_UseLimitation_description: 'Limite d\'usage',
        
        // Linkages
        Data_LinkageName_label: 'Nom',
        Data_LinkageName_description: 'Nom de la ressource',
        Data_LinkageURL_label: 'URL',
        Data_LinkageURL_description: 'URL de la ressource',
        Data_LinkageDescription_label: 'Description',
        Data_LinkageDescription_description: 'Description du lien et de la ressource',
        
        // TopicCategories
        Data_TopicCategories_label: 'Catégorie',
        Data_TopicCategories_description: 'catégorie internationale (ISO)',
        
        // Keywords
        Data_Keywords_label: 'Mot-clés',
        Data_Keywords_description: 'Liste des mot-clés décrivant les données',
        
        // GeographicExtent
        Data_ExtentName_label: 'Nom de l\'emprise',
        Data_ExtentName_description: '',
        Data_ExtentNorthbound_label: 'Latitude Nord',
        Data_ExtentNorthbound_description: '',
        Data_ExtentSouthbound_label: 'Latitude Sud',
        Data_ExtentSouthbound_description: '',
        Data_ExtentEastbound_label: 'Longitude Est',
        Data_ExtentEastbound_description: '',
        Data_ExtentWestbound_label: 'Longitude Ouest',
        Data_ExtentWestbound_description: '',
        
        // TemporalExtent
        Data_TempExtentName_label: 'Description',
        Data_TempExtentName_description: 'Nom de l\'étendue temporelle',
        Data_TempExtentBegin_label: 'Début',
        Data_TempExtentBegin_description: 'Début',
        Data_TempExtentEnd_label: 'Fin',
        Data_TempExtentEnd_description: 'Fin',
        
    }
};