USE [bloc3_projet_ti]
GO
/****** Object:  Table [dbo].[cours]    Script Date: 8/24/2020 4:56:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[cours](
	[id_cours] [int] IDENTITY(1,1) NOT NULL,
	[nom_cours] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_cours_k] PRIMARY KEY CLUSTERED 
(
	[id_cours] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[professeurs]    Script Date: 8/24/2020 4:56:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[professeurs](
	[id_professeurs] [int] IDENTITY(1,1) NOT NULL,
	[nom_professeurs] [nvarchar](50) NOT NULL,
	[prenom_professeurs] [nvarchar](50) NOT NULL,
	[mail_professeurs] [nvarchar](50) NOT NULL,
	[password_professeurs] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_professeurs_ok] PRIMARY KEY CLUSTERED 
(
	[id_professeurs] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[professeurs_cours]    Script Date: 8/24/2020 4:56:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[professeurs_cours](
	[id_professeurs] [int] NOT NULL,
	[id_cours] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[questions]    Script Date: 8/24/2020 4:56:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[questions](
	[id_questions] [int] IDENTITY(1,1) NOT NULL,
	[nom_questions] [nvarchar](50) NOT NULL,
	[autheur_questions] [int] NOT NULL,
	[cours_questions] [int] NOT NULL,
 CONSTRAINT [PK_questions] PRIMARY KEY CLUSTERED 
(
	[id_questions] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[questions_tests]    Script Date: 8/24/2020 4:56:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[questions_tests](
	[id_questions] [int] NOT NULL,
	[id_tests] [int] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[solutions]    Script Date: 8/24/2020 4:56:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[solutions](
	[id_solutions] [int] IDENTITY(1,1) NOT NULL,
	[texte_solutions] [ntext] NOT NULL,
	[id_questions] [int] NOT NULL,
	[reponse_solutions] [int] NOT NULL,
 CONSTRAINT [PK_solutions] PRIMARY KEY CLUSTERED 
(
	[id_solutions] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[tests]    Script Date: 8/24/2020 4:56:03 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[tests](
	[id_tests] [int] IDENTITY(1,1) NOT NULL,
	[nom_tests] [nvarchar](50) NOT NULL,
	[autheur_tests] [int] NOT NULL,
	[cours_tests] [int] NOT NULL,
 CONSTRAINT [PK_tests] PRIMARY KEY CLUSTERED 
(
	[id_tests] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[cours] ON 

INSERT [dbo].[cours] ([id_cours], [nom_cours]) VALUES (1, N'Java')
INSERT [dbo].[cours] ([id_cours], [nom_cours]) VALUES (2, N'Analyse')
INSERT [dbo].[cours] ([id_cours], [nom_cours]) VALUES (3, N'TI')
INSERT [dbo].[cours] ([id_cours], [nom_cours]) VALUES (4, N'FBD')
INSERT [dbo].[cours] ([id_cours], [nom_cours]) VALUES (5, N'Developpement jeux video')
SET IDENTITY_INSERT [dbo].[cours] OFF
SET IDENTITY_INSERT [dbo].[professeurs] ON 

INSERT [dbo].[professeurs] ([id_professeurs], [nom_professeurs], [prenom_professeurs], [mail_professeurs], [password_professeurs]) VALUES (1, N'Godefroid', N'Laurent', N'godefroid.laurent@helha.be', N'gogogo')
INSERT [dbo].[professeurs] ([id_professeurs], [nom_professeurs], [prenom_professeurs], [mail_professeurs], [password_professeurs]) VALUES (5, N'Colmant', N'Aurelien', N'colmant.aurelien@helha.be', N'cococo')
INSERT [dbo].[professeurs] ([id_professeurs], [nom_professeurs], [prenom_professeurs], [mail_professeurs], [password_professeurs]) VALUES (6, N'Altares', N'Valentin', N'altares.valentin@helha.be', N'alalal')
SET IDENTITY_INSERT [dbo].[professeurs] OFF
INSERT [dbo].[professeurs_cours] ([id_professeurs], [id_cours]) VALUES (1, 1)
INSERT [dbo].[professeurs_cours] ([id_professeurs], [id_cours]) VALUES (1, 2)
INSERT [dbo].[professeurs_cours] ([id_professeurs], [id_cours]) VALUES (1, 3)
INSERT [dbo].[professeurs_cours] ([id_professeurs], [id_cours]) VALUES (5, 1)
INSERT [dbo].[professeurs_cours] ([id_professeurs], [id_cours]) VALUES (5, 4)
INSERT [dbo].[professeurs_cours] ([id_professeurs], [id_cours]) VALUES (6, 5)
SET IDENTITY_INSERT [dbo].[questions] ON 

INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (1, N'question dos', 1, 1)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (2, N'question duoaaa', 5, 4)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (6, N'question ajouté via api', 1, 1)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (14, N'adiad', 6, 5)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (16, N'Jean Marie le pen', 6, 5)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (17, N'ydahodj', 6, 5)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (18, N'Question sur la joie', 6, 5)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (19, N'Intitulé', 6, 5)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (20, N'Première question FBD', 5, 4)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (21, N'Question suivante en FBD', 5, 4)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (22, N'Hierarchie blabla', 5, 4)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (24, N'Romia', 5, 1)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (25, N'zadgadgoad', 6, 5)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (28, N'daidha', 6, 5)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (29, N'avdbizadb', 6, 5)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (30, N'Je m''appele sebastieno', 1, 2)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (34, N'Est ce que je suis lola ? ', 5, 1)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (36, N'Question sur l''analyse des données', 1, 2)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (37, N'Jean', 1, 2)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (38, N'Analyse question uno', 1, 1)
INSERT [dbo].[questions] ([id_questions], [nom_questions], [autheur_questions], [cours_questions]) VALUES (39, N'iahod', 1, 3)
SET IDENTITY_INSERT [dbo].[questions] OFF
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (36, 30)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (30, 34)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (37, 30)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (2, 3)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (24, 2)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (34, 26)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (34, 3)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (1, 3)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (20, 13)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (21, 18)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (24, 3)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (1, 39)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (1, 26)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (24, 26)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (6, 2)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (1, 2)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (16, 7)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (28, 7)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (6, 12)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (22, 18)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (1, 12)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (19, 7)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (17, 7)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (25, 7)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (36, 41)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (34, 39)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (6, 39)
INSERT [dbo].[questions_tests] ([id_questions], [id_tests]) VALUES (30, 41)
SET IDENTITY_INSERT [dbo].[solutions] ON 

INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (2, N'solution à la viea', 1, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (3, N'solution a la vie numero 2', 1, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (5, N'soluce de bloodborne', 2, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (8, N'solution 2 modifié via api', 2, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (14, N'onadonadaaaaaaaaaaaaaaaaa', 14, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (15, N'Maybe ?', 16, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (18, N'Corona', 17, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (20, N'Corona', 17, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (21, N'Je marche dans le aboisaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', 18, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (22, N'Tu Manges une pizza aux aubergianesaaaaa', 18, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (25, N'Vrai', 19, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (26, N'Faux ', 19, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (28, N'Jamais', 19, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (29, N'J''adore le SQL', 20, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (30, N'Je ne suis pas le meilleur en FBD', 20, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (31, N'Je suis le meilleur en FBD', 20, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (32, N'Vrai', 21, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (33, N'Faux
', 21, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (34, N'ça sert a qqch', 22, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (35, N'C''est une interface', 22, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (36, N'euh super classes ?', 22, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (38, N'Rami', 24, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (39, N'Remi', 24, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (40, N'Rumi', 24, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (41, N'uoahduoah', 25, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (42, N'adgpça', 25, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (46, N'sbadimadm', 28, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (47, N'iaizudhpz', 29, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (48, N'Oui', 30, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (49, N'Non', 30, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (53, N'Peut-etre', 34, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (55, N'Oui', 34, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (58, N'Vrai', 36, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (59, N'Faux', 36, 0)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (60, N'ryfatgdhiuojpd', 37, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (61, N'La solution c''est la solution', 38, 1)
INSERT [dbo].[solutions] ([id_solutions], [texte_solutions], [id_questions], [reponse_solutions]) VALUES (62, N'vuaodoaodojdo', 39, 1)
SET IDENTITY_INSERT [dbo].[solutions] OFF
SET IDENTITY_INSERT [dbo].[tests] ON 

INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (2, N'Jean Bernard', 1, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (3, N'', 1, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (4, N'Test Pour le cours de java ', 5, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (7, N'Test Pour le cours DJV', 6, 5)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (12, N'Hey oha', 5, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (13, N'Le charmant test', 5, 4)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (14, N'Lolaaaaaaaaaaaaaaaaa', 5, 4)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (17, N'Test notif', 5, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (18, N'Le testaaa', 5, 4)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (26, N'Test sur kiki', 1, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (27, N'Ceci est un test', 1, 2)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (28, N'Test', 1, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (29, N'Test', 1, 2)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (30, N'Test blblla', 1, 2)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (31, N'Test de TI ', 1, 2)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (32, N'Test lalalala', 1, 2)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (33, N'Test lololo', 1, 2)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (34, N'Test le plus mieux', 1, 2)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (35, N'aizhiadb', 6, 5)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (36, N'Rajout d''un test', 6, 5)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (37, N'Jean du jardin', 6, 5)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (38, N'Test sur les téléphones', 1, 3)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (39, N'Test sur cookie', 1, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (40, N'Analyse Examen', 1, 1)
INSERT [dbo].[tests] ([id_tests], [nom_tests], [autheur_tests], [cours_tests]) VALUES (41, N'Test test encore et toujours', 1, 2)
SET IDENTITY_INSERT [dbo].[tests] OFF
ALTER TABLE [dbo].[professeurs_cours]  WITH CHECK ADD  CONSTRAINT [FK_professeurs_cours_cours] FOREIGN KEY([id_cours])
REFERENCES [dbo].[cours] ([id_cours])
GO
ALTER TABLE [dbo].[professeurs_cours] CHECK CONSTRAINT [FK_professeurs_cours_cours]
GO
ALTER TABLE [dbo].[professeurs_cours]  WITH CHECK ADD  CONSTRAINT [FK_professeurs_cours_professeurs] FOREIGN KEY([id_professeurs])
REFERENCES [dbo].[professeurs] ([id_professeurs])
GO
ALTER TABLE [dbo].[professeurs_cours] CHECK CONSTRAINT [FK_professeurs_cours_professeurs]
GO
ALTER TABLE [dbo].[questions]  WITH CHECK ADD  CONSTRAINT [FK_questions_cours] FOREIGN KEY([cours_questions])
REFERENCES [dbo].[cours] ([id_cours])
GO
ALTER TABLE [dbo].[questions] CHECK CONSTRAINT [FK_questions_cours]
GO
ALTER TABLE [dbo].[questions]  WITH CHECK ADD  CONSTRAINT [FK_questions_professeurs] FOREIGN KEY([autheur_questions])
REFERENCES [dbo].[professeurs] ([id_professeurs])
GO
ALTER TABLE [dbo].[questions] CHECK CONSTRAINT [FK_questions_professeurs]
GO
ALTER TABLE [dbo].[questions_tests]  WITH CHECK ADD  CONSTRAINT [FK_questions_tests_questions] FOREIGN KEY([id_questions])
REFERENCES [dbo].[questions] ([id_questions])
GO
ALTER TABLE [dbo].[questions_tests] CHECK CONSTRAINT [FK_questions_tests_questions]
GO
ALTER TABLE [dbo].[questions_tests]  WITH CHECK ADD  CONSTRAINT [FK_questions_tests_tests] FOREIGN KEY([id_tests])
REFERENCES [dbo].[tests] ([id_tests])
GO
ALTER TABLE [dbo].[questions_tests] CHECK CONSTRAINT [FK_questions_tests_tests]
GO
ALTER TABLE [dbo].[solutions]  WITH CHECK ADD  CONSTRAINT [FK_solutions_questions] FOREIGN KEY([id_questions])
REFERENCES [dbo].[questions] ([id_questions])
GO
ALTER TABLE [dbo].[solutions] CHECK CONSTRAINT [FK_solutions_questions]
GO
ALTER TABLE [dbo].[tests]  WITH CHECK ADD  CONSTRAINT [FK_tests_cours] FOREIGN KEY([cours_tests])
REFERENCES [dbo].[cours] ([id_cours])
GO
ALTER TABLE [dbo].[tests] CHECK CONSTRAINT [FK_tests_cours]
GO
ALTER TABLE [dbo].[tests]  WITH CHECK ADD  CONSTRAINT [FK_tests_professeurs] FOREIGN KEY([autheur_tests])
REFERENCES [dbo].[professeurs] ([id_professeurs])
GO
ALTER TABLE [dbo].[tests] CHECK CONSTRAINT [FK_tests_professeurs]
GO
